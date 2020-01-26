<?php

namespace App\Http\Resources;

use App\Cart;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class AllCartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
//        return parent::toArray($request);
        $carts = Cart::where('user_id', $this->user()->id)->get();

        return [
            'cart'=>CartResource::collection($carts),
            'cart_count'=>Auth::user()->carts->count(),
            'cart_price'=>Auth::user()->carts->sum('total_price')

        ];
    }
}
