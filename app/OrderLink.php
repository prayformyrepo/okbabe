<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderLink extends Model
{
    protected $fillable = ['link','used','time_used','order_id','user_id','product_id'];
}
