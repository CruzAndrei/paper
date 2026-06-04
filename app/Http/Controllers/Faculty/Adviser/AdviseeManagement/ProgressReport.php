<?php

namespace App\Http\Controllers\Faculty\Adviser\AdviseeManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProgressReport extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $students = DB::table('tbl_students as s')

            // Core joins
            ->leftJoin('tbl_proposals as tp', 's.id', '=', 'tp.student_id')
            ->leftJoin('tbl_theses as t', 'tp.id', '=', 't.proposal_id')
            ->leftJoin('tbl_section_advisers as sa', 's.section_adviser_id', '=', 'sa.id')
            ->leftJoin('tbl_faculty_assignments as fa', 'sa.faculty_assign_id', '=', 'fa.id')
            ->leftJoin('tbl_faculties as f', 'fa.faculty_id', '=', 'f.id')
            ->leftJoin('users as u', 'f.user_id', '=', 'u.id')

            ->select([
                's.id as group_id',
                DB::raw("s.id as group_number"),
                DB::raw("CONCAT(sa.section, LPAD(s.id, 3, '0')) as group_code"),
                'sa.section as block',

                // Proposal
                'tp.proposal_title as title',
                DB::raw("CONCAT(s.first_name, ' ', s.last_name) as student_name"),

                DB::raw("1 as proponents"),

                // Placeholder
                DB::raw("'N/A' as thesis_stage"),

                // Calculated status
                DB::raw("CASE WHEN t.id IS NOT NULL THEN 1 ELSE 0 END as status"),
            ])

            ->orderBy('s.id', 'asc')
            ->limit(10)
            ->get();

        // dd($groups);
        return Inertia::render(
            'Faculty/management/adviser/advisee_management/progress',
            [
                'groups' => $students
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

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

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
