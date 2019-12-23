<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    public function scopeCategories($query)
    {
        return $query->find($this->adviser_id)->categories();
    }
}
