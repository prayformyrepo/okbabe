<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    public function scopeCategories($query)
    {
        return $query->where('id',$this->adviser_id)->categories();
    }
}
