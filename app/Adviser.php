<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adviser extends Model
{
    public function categories()
    {
        return $this->belongsToMany(Adviser_category::class,'adviser_to_categories');
    }
    public function times()
    {
        return $this->hasMany(Adviser_time::class)->orderBy('id','DESC');
    }

}
