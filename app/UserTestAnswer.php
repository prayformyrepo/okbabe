<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserTestAnswer extends Model
{
    protected $fillable = ['user_id','test_question_id','test_id','test_answer_id'];

}
