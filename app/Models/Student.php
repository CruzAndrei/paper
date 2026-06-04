<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $table = 'tbl_students';
    
    protected $fillable = [
        'user_id',
        'last_name',
        'first_name',
        'middle_name',
        'suffix',
        'section',
        'spec_id',
        'section_adviser_id',
    ];


    /*
    ==================================================================================
    RELATIONSHIPS
    ==================================================================================
    */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function specialization()
    {
        return $this->belongsTo(Specialization::class);
    }

    public function sectionAdviser()
    {
        return $this->belongsTo(SectionAdviser::class, 'section_adviser_id');
    }

    public function proposals()
    {
        return $this->hasMany(Proposal::class, 'student_id');
    }

}
