<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
/*        return parent::toArray($request);*/
        return [
        'id'=>$this->id,
        'product'=>new ProductResource($this->product),
        'price'=>$this->total_price

        ];
    }
}
