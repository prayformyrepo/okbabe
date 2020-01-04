<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderPayment extends Model
{
    protected $fillable = ['order_id','total_price','payment_method','authority','refid','state'];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

}
