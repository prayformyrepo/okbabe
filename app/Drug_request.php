<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drug_request extends Model
{
    protected $fillable=['description','address','lat','long'];
}
