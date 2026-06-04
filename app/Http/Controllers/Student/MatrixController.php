<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MatrixController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = Auth::id();

        // 1. Get Logged-in Student's Info
        $student = DB::table('tbl_students')
            ->join('tbl_section_advisers', 'tbl_students.section_adviser_id', '=', 'tbl_section_advisers.id')
            ->join('tbl_faculty_assignments', 'tbl_section_advisers.faculty_assign_id', '=', 'tbl_faculty_assignments.id')
            ->join('tbl_school_years', 'tbl_faculty_assignments.sy_id', '=', 'tbl_school_years.id')
            ->where('tbl_students.user_id', $userId)
            ->select(
                'tbl_students.id',
                'tbl_section_advisers.section',
                'tbl_faculty_assignments.sy_id',
                'tbl_school_years.year as batch_year'
            )
            ->first();

        if (!$student) {
            abort(403, 'Student record not found.');
        }

        // 2. Get Active Year
        $activeYear = DB::table('tbl_school_years')
            ->join('tbl_semesters', 'tbl_school_years.id', '=', 'tbl_semesters.school_year_id')
            ->where('tbl_semesters.is_active', true)
            ->value('year') ?? date('Y');

        $yearLevel = 3 + ($activeYear - $student->batch_year);

        // 3. Fetch Defense Schedules
        $schedules = DB::table('tbl_defense_matrices')
            ->join('tbl_endorsements', 'tbl_defense_matrices.endorsement_id', '=', 'tbl_endorsements.id')
            ->join('tbl_theses', 'tbl_endorsements.thesis_id', '=', 'tbl_theses.id')
            ->join('tbl_proposals', 'tbl_theses.proposal_id', '=', 'tbl_proposals.id')
            ->join('tbl_students', 'tbl_proposals.student_id', '=', 'tbl_students.id')
            ->join('tbl_section_advisers', 'tbl_students.section_adviser_id', '=', 'tbl_section_advisers.id')
            
            // Adviser Details
            ->join('tbl_faculty_assignments', 'tbl_section_advisers.faculty_assign_id', '=', 'tbl_faculty_assignments.id')
            ->join('tbl_faculties as adviser', 'tbl_faculty_assignments.faculty_id', '=', 'adviser.id')
            ->leftJoin('tbl_school_years', 'tbl_faculty_assignments.sy_id', '=', 'tbl_school_years.id')
            
            // REMOVED: Previous LEFT JOINs for panels to avoid duplicates/confusion. 
            // We now handle panels via Subquery in Select.

            ->where('tbl_section_advisers.section', $student->section)
            ->where('tbl_faculty_assignments.sy_id', $student->sy_id)
            
            ->select(
                'tbl_defense_matrices.id as defense_matrix_id',
                'tbl_students.id as student_id',
                'tbl_section_advisers.section',
                'tbl_theses.title as thesis_title',
                DB::raw("(3 + ($activeYear - tbl_school_years.year)) as year_level"),
                
                DB::raw("DATE_FORMAT(tbl_defense_matrices.defense_schedule, '%M %e, %Y') as defense_date"),
                DB::raw("CONCAT(
                    DATE_FORMAT(tbl_defense_matrices.defense_schedule, '%l:%i %p'), 
                    ' - ', 
                    DATE_FORMAT(DATE_ADD(tbl_defense_matrices.defense_schedule, INTERVAL 1 HOUR), '%l:%i %p')
                ) as defense_time_range"),

                // --- STATUS LOGIC ---
                DB::raw("
                    CASE 
                        WHEN DATE_ADD(tbl_defense_matrices.defense_schedule, INTERVAL 1 HOUR) < NOW() 
                             AND (
                                SELECT COUNT(*) 
                                FROM tbl_defense_evaluations 
                                WHERE tbl_defense_evaluations.defense_id = tbl_defense_matrices.id
                             ) >= 3
                        THEN 'completed'
                        ELSE 'upcoming'
                    END as status
                "),

                // --- CONDITIONAL PANELISTS LOGIC ---
                // IF Status is 'completed' -> Show Evaluators (from tbl_defense_evaluations)
                // ELSE -> Show Endorsed Panels (from tbl_endorsed_panels)
                DB::raw("
                    CASE 
                        WHEN DATE_ADD(tbl_defense_matrices.defense_schedule, INTERVAL 1 HOUR) < NOW() 
                             AND (
                                SELECT COUNT(*) 
                                FROM tbl_defense_evaluations 
                                WHERE tbl_defense_evaluations.defense_id = tbl_defense_matrices.id
                             ) >= 3
                        THEN (
                            SELECT GROUP_CONCAT(DISTINCT CONCAT(f.name_prefix, ' ', f.first_name, ' ', f.last_name) SEPARATOR ', ')
                            FROM tbl_defense_evaluations de
                            JOIN tbl_faculty_assignments fa ON de.evaluator_id = fa.id
                            JOIN tbl_faculties f ON fa.faculty_id = f.id
                            WHERE de.defense_id = tbl_defense_matrices.id
                        )
                        ELSE (
                            SELECT GROUP_CONCAT(DISTINCT CONCAT(f.name_prefix, ' ', f.first_name, ' ', f.last_name) SEPARATOR ', ')
                            FROM tbl_endorsed_panels ep
                            JOIN tbl_faculty_assignments fa ON ep.panel_id = fa.id
                            JOIN tbl_faculties f ON fa.faculty_id = f.id
                            WHERE ep.defense_matrix_id = tbl_defense_matrices.id
                            AND ep.is_confirmed = 1
                        )
                    END as panelists
                "),

                DB::raw("
                    CONCAT(
                        (3 + ($activeYear - tbl_school_years.year)), 
                        tbl_section_advisers.section, 
                        LPAD(tbl_students.id, 3, '0')
                    ) AS group_code
                "),
                DB::raw("CONCAT(adviser.name_prefix, ' ', adviser.first_name, ' ', adviser.last_name) as adviser_name"),
                DB::raw("CONCAT(tbl_students.first_name, ' ', tbl_students.last_name) as members")
            )
            ->groupBy(
                'tbl_defense_matrices.id',
                'tbl_defense_matrices.defense_schedule',
                'tbl_students.id',
                'tbl_students.first_name',
                'tbl_students.last_name',
                'tbl_section_advisers.section',
                'tbl_theses.title',
                'tbl_school_years.year',
                'adviser.name_prefix',
                'adviser.first_name',
                'adviser.last_name'
            )
            ->orderBy('tbl_defense_matrices.defense_schedule', 'asc')
            ->get();

        // dd($schedules);

        return Inertia::render('Student/management/defense', [
            'schedules' => $schedules,
            'mySection' => $student->section,
            'yearLevel' => $yearLevel,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
