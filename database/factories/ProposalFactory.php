<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Proposal>
 */
class ProposalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // Link to a student
            'student_id' => Student::inRandomOrder()->first()?->id ?? Student::factory(),

            'proposal_title' => $this->faker->sentence(6), // e.g., "Automated Solar Powered..."

            'proposal_filepath' => 'proposals/student_' . $this->faker->numberBetween(1, 100) . '_proposal.pdf',

            'is_pursued' => false,
        ];
    }
}
