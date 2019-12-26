<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product_comment extends Model
{
    protected $fillable = ['title','text','status','product_id','user_id'];
}
