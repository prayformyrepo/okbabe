<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TestResourceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'slug' =>$this->slug,
            'description' =>$this->description,
            'questions_count' =>$this->questions_count,
            'answers_per_question' =>$this->answers_per_question,
            'created_at' =>Carbon::make($this->created_at)->format('Y-m-d H:i:s'),

//            'image'=>$this->image()->get(),
//            'user'=>[
//                'id'=>$this->user->id,
//                'name'=> $this->user->name != null ? $this->user->name : $this->user->username  ,
//                'avatar'=>$this->user->avatar
//            ],
        ];


//        return parent::toArray($request);
    }
}
