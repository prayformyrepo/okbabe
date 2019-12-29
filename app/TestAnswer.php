<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TestAnswer extends Model
{
    protected $fillable = ['test_question_id','answer_number','answer_text','answer_weight'];

}
