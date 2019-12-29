<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
           'id'=>$this->id,
           'name'=>$this->name,
           'price'=>$this->price,
           'images'=>$this->images->first(),
           'categories'=>$this->categories,
           'featured'=>$this->featured,
           'created_at'=>Carbon::make($this->created_at)->format('Y-m-d H:i:s')
        ];
    }

}
