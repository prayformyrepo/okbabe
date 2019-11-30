<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post_category extends Model
{
    public function sub_categories($category_id)
    {
      return Post_category::select('id','title','image','parent_category_id')->where('parent_category_id',$category_id)->get();
    }
}
