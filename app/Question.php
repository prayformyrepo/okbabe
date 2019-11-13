<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    public function answers()
    {
        return $this->hasMany(Question_answer::class)->orderBy('id','DESC');
    }
}
