<?php

namespace App\Http\Resources;

use App\Product_comment;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductCommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
       // return parent::toArray($request);
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'user'=>[
                'id'=>$this->user->id,
                'name'=> $this->user->name != null ? $this->user->name : $this->user->username  ,
                'avatar'=>$this->user->avatar
            ],
            'text'=>$this->text,
            'created_at'=>Carbon::make($this->created_at)->format('Y-m-d H:i:s')
        ];
    }
}
