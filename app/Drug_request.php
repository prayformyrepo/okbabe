<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drug_request extends Model
{
    protected $fillable=['user_id','description','address','image_id','lat','long'];

    public function image()
    {
        return $this->belongsTo(Image::class)->select('image_path');
    }

    public function user()
    {
        return $this->belongsTo(User::class)->select('name','username','avatar');

    }
}
