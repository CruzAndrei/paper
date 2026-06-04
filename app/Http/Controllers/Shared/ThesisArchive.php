<?php

namespace App\Http\Controllers\Shared;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ThesisArchive extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // TASK 2.1: Arnel      --part 1/2

        // Main Query: Query the title, date, tags, author ( and id for linking in DB )

        $archives = DB::table('tbl_archived_journals')
            // 1. Join Theses (For Title)
            ->leftJoin('tbl_theses', 'tbl_archived_journals.thesis_id', '=', 'tbl_theses.id')
            
            ->leftJoin('tbl_proposals', 'tbl_theses.proposal_id', '=', 'tbl_proposals.id')
            ->leftJoin('tbl_students', 'tbl_proposals.student_id', '=', 'tbl_students.id')
            
            ->select(
                // --- Simple Columns ---
                'tbl_archived_journals.id as journal_id', // journal_id for linking to show page
                'tbl_theses.title as title',
                'tbl_archived_journals.created_at as date_archived',
                'tbl_archived_journals.keywords as tags',
                
                // --- Concatenated Author Names ---
                DB::raw("CONCAT(tbl_students.first_name, ' ', tbl_students.last_name) as authors"),
                
                // --- Concatenated User IDs for Backend Linking ---
                'tbl_students.user_id as author_user_ids'
            )
            ->groupBy(
                'tbl_archived_journals.id',
                'tbl_theses.title',
                'tbl_archived_journals.created_at',
                'tbl_archived_journals.keywords',
                'tbl_students.first_name',
                'tbl_students.last_name',
                'tbl_students.user_id'
            )
            ->orderBy('tbl_archived_journals.created_at', 'desc')
            ->get(); // Use ->paginate(10) if you want pagination

        // Render and Send props originally Shared/repository/thesis
        return Inertia::render('Guest/repository', [
            'archives' => $archives
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
        // TASK 2.1: Arnel      --part 2/2
         // Note: Granted permission, you can add new route in routes/web.php dependent on your logic

        $journal = DB::table('tbl_archived_journals as aj')  
                    ->join('tbl_theses as t', 'aj.thesis_id', '=', 't.id')
                    ->select(
                        'aj.id',
                        'aj.file_path',
                        't.title'
                    )
                    ->where('aj.id', $id)
                    ->first();

        // Show selected archive thesis information
        $url_test = storage_path('app/testing/long.pdf');
        // dd($url_test);

        // Return 404 if journal not found
        if (!$journal) {
            abort(404, 'Archived journal not found');
        }

        return Inertia::render('Guest/document-preview', [
            'journal' => $journal,
            // 'url_test' => $url_test
        ]);
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
