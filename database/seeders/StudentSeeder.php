<?php

namespace Database\Seeders;

use App\Models\Specialization;
use App\Models\SectionAdviser;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Student;
use App\Models\User;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sectionAdvisers = SectionAdviser::all();

        if ($sectionAdvisers->isEmpty()) {
            $this->command->info('No section advisers found. Skipping Student seeding.');
            return;
        }

        $specs = Specialization::pluck('id')->toArray(); // e.g., [1, 2]

        if (empty($specs)) {
            $this->command->warn('No Specializations found. Please seed specializations first.');
            return;
        }

        $testUser = User::where('email', 'student@example.com')->first();
        
        if ($testUser) {
            $firstAdviser = $sectionAdvisers->first();
            $realSection = $firstAdviser->section ?? 1;
            
            Student::firstOrCreate(
                ['user_id' => $testUser->id], 
                [
                    'section_adviser_id' => $firstAdviser->id,
                    'spec_id'            => $specs[0],
                    'last_name'          => 'User',
                    'first_name'         => 'Student',
                    'middle_name'        => 'Manual',
                    'suffix'             => null,
                    'section'            => $realSection,
                ]
            );
            
            $this->command->info('Test Student (student@example.com) successfully linked to section adviser #'.$firstAdviser->id);
        }

        foreach ($sectionAdvisers as $sectionAdviser) {
            $realSection = $sectionAdviser->section ?? 1;

            $specIndex = ($realSection % 2 === 0) ? 0 : 1;
            
            $assignedSpecId = $specs[$specIndex] ?? $specs[0];

            Student::factory()->count(rand(3, 4))->create([
                'section_adviser_id' => $sectionAdviser->id,
                'section'            => $realSection,
                'spec_id'            => $assignedSpecId,
            ]);
        }
    }
}
