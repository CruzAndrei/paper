<?php

namespace Database\Seeders;

use App\Models\Proposal;
use App\Models\Student;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProposalSeeder extends Seeder
{
    /**
     * Run the database seeds - Create proposals for individual students
     */
    public function run(): void
    {
        // 1. Get all existing Students
        $students = Student::all();

        if ($students->isEmpty()) {
            $this->command->info('No Students found. Skipping Proposal seeding.');
            return;
        }

        // 2. Loop through each student and create proposals for them
        foreach ($students as $student) {
            
            // LOGIC: Create 2-3 proposal topics for each student
            $proposals = Proposal::factory()->count(rand(2, 3))->create([
                'student_id' => $student->id, // Link to individual student
                'is_pursued' => false,        // Default all to false first
            ]);

            // LOGIC: 80% chance the student has decided on a topic
            if (rand(1, 100) <= 80) {
                // Pick one random proposal as the "Pursued" one (chosen topic)
                $chosenProposal = $proposals->random();
                $chosenProposal->update(['is_pursued' => true]);
            }
        }
    }
}

