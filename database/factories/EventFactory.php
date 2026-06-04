<?php

namespace Database\Factories;

use App\Models\Milestone;
use App\Models\Semester;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    public function definition(): array
    {
        $startDate = $this->faker->dateTimeBetween('now', '+1 month');
        $endDate   = $this->faker->dateTimeBetween($startDate, '+2 months');

        return [
            'milestone_id' => Milestone::factory(),
            'semester_id'  => Semester::factory(),
            'target_role'  => $this->faker->randomElement(['student', 'faculty']),
            'course'       => $this->faker->randomElement([
                'Concept Paper',
                'Thesis / Dissertation 1',
                'Thesis / Dissertation 2',
                'ALL',
            ]),
            'start_date' => $startDate,
            'end_date'   => $endDate,
        ];
    }
}