<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drug_request extends Model
{
    protected $fillable=['user_id','description','address','lat','long'];
}
