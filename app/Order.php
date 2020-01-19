<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['user_id','total_price','discount_info','state'];

    public function productOrders()
    {
        return $this->hasMany(ProductOrder::class,'order_id');
    }

    public function payments()
    {
        return $this->hasMany(OrderPayment::class,'order_id');
    }
}
