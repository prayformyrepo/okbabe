<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TestResourceCollection extends JsonResource
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
            'test_id'=>$this->test_id,
            'question_number' =>$this->question_number,
            'question_text' =>$this->question_text,
            'created_at' =>Carbon::make($this->created_at)->format('Y-m-d H:i:s'),

            'answers'=>$this->answers()->get(),
//            'answers'=>[
//                'id'=>$this->answers()->id,
//                'test_question_id'=>$this->answers()->test_question_id,
//                'answer_number'=>$this->answers()->answer_number,
//                'answer_text'=>$this->answers()->answer_text,
//                'answer_weight'=>$this->answers()->answer_weight
//            ],
        ];


//        return parent::toArray($request);
    }
}
