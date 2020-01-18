<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adviser_time extends Model
{
    protected $fillable = ['adviser_id','date','time_from','time_to'];

}
