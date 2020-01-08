<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TestQuestion extends Model
{
    protected $fillable = ['id','test_id','question_number','question_text','created_at'];

    public function answers()
    {
        return $this->hasMany(TestAnswer::class);
    }
}
