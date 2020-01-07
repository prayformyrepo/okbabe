<?php

namespace App\Http\Resources;

use Carbon\Carbon;
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
            'created_at' =>Carbon::make($this->created_at)->format('Y-m-d H:i:s'),

            'image'=>$this->image()->get(),
            'user'=>[
                'id'=>$this->user->id,
                'name'=> $this->user->name != null ? $this->user->name : $this->user->username  ,
                'avatar'=>$this->user->avatar
            ],
        ];
    }
}
