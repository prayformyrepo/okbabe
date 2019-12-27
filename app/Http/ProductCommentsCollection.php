<?php

namespace App\Http\Resources;

use App\Http\Resources\ProductCommentResource;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCommentsCollection extends ResourceCollection
{
    public $collects = ProductCommentResource::class;
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'text'=>$this->text,
            'created_at'=>Carbon::make($this->created_at)->format('Y-m-d H:i:s')
        ];
    }
}
