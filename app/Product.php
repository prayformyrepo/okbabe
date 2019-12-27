<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $hidden = ['pivot'];

    public function categories()
    {
        return $this->belongsToMany(Product_category::class,'product_to_categories')->select('id','name');
    }

    public function productType()
    {
        return $this->belongsTo(Product_type::class);
    }

    public function images()
    {
        return $this->belongsToMany(Image::class,'product_images')->select('id','image_path','thumbnail_path');
    }

    public function productComments()
    {
        return $this->hasMany(Product_comment::class,'product_id');
    }
}