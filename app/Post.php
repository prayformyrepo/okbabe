<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function categories()
    {
        $categories=array();
        $add_cat=$this->belongsToMany(Post_category::class,'post_to_categories');
        foreach ($add_cat as $cat){
            $c['id']=$cat->id;
            $c['title']=$cat->title;
            $c['image']=$cat->image;
            $c['parent_category_id']=$cat->parent_category_id;

            array_push($categories,$c);

            return $categories;
        }
    }
}
