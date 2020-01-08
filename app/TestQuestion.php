<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TestQuestion extends Model
{
    protected $fillable = ['test_id','question_number','question_text'];

    public function answers()
    {
        return $this->hasMany(TestAnswer::class);
    }
}
