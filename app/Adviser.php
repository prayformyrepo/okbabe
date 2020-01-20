<?php

namespace App;

use App\Scopes\AdviserScope;
use Illuminate\Database\Eloquent\Model;

class Adviser extends Model
{
    public function categories()
    {
        return $this->belongsToMany(Adviser_category::class,'adviser_to_categories');
    }
    public function times()
    {
        return $this->hasMany(Adviser_time::class)->orderBy('date','ASC');
    }

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new AdviserScope);
    }

}
