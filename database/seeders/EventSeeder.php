<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\Milestone;
use App\Models\Semester;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    public function run(): void
    {
        $activeSemester = Semester::where('is_active', true)->first();
        if (!$activeSemester) {
            $this->command->error("No active semester found.");
            return;
        }

        $semStart = Carbon::parse($activeSemester->start_date);

        if ($activeSemester->semester == 2) {
            $allowedStages = [1, 3];
            $this->command->info("2nd Sem: Scheduling MOR and DP2 events.");
        } else {
            $allowedStages = [2];
            $this->command->info("1st Sem: Scheduling DP1 events.");
        }

        $milestones = Milestone::whereIn('stage', $allowedStages)
            ->orderBy('stage')
            ->orderBy('id')
            ->get();

        if ($milestones->isEmpty()) {
            $this->command->warn("No milestones found for stages: " . implode(',', $allowedStages));
            return;
        }

        $accumulatedDays = 0;
        foreach ($milestones as $milestone) {
            $accumulatedDays += $milestone->duration;
            $startDate = $semStart->copy()->addDays($accumulatedDays);
            $endDate   = $startDate->copy()->addDays(14);

            $course = match($milestone->stage) {
                1       => 'Concept Paper',
                2       => 'Thesis / Dissertation 1',
                3       => 'Thesis / Dissertation 2',
                default => 'ALL',
            };

            Event::firstOrCreate(
                [
                    'milestone_id' => $milestone->id,
                    'semester_id'  => $activeSemester->id,
                ],
                [
                    'target_role' => 'student',
                    'course'      => $course,
                    'start_date'  => $startDate,
                    'end_date'    => $endDate,
                ]
            );
        }

        $this->command->info("EventSeeder: " . $milestones->count() . " events seeded.");
    }
}