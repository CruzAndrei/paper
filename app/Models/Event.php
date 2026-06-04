<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $table = 'tbl_events';
    public $timestamps = false;

    protected $fillable = [
        'milestone_id',
        'semester_id',
        'target_role',
        'course',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date'   => 'date',
    ];

    const TARGET_ROLES = ['student', 'faculty'];

    const COURSES = [
        'Concept Paper',
        'Thesis / Dissertation 1',
        'Thesis / Dissertation 2',
        'ALL',
    ];

    public function milestone()
    {
        return $this->belongsTo(Milestone::class, 'milestone_id');
    }

    public function semester()
    {
        return $this->belongsTo(Semester::class, 'semester_id');
    }
}