<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DrogRequestResource extends JsonResource
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
            'description'=>$this->description,
            'address' =>$this->address,
            'lat' =>$this->lat,
            'long' =>$this->long,

            'image'=>$this->image()->get(),
            'user'=>$this->user()->get()

        ];
    }
}
