<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Post;
use App\Post_category;
use Illuminate\Http\Request;
use Validator;
class BlogController extends Controller
{
    public $successStatus = 200;

    public function show_posts(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'post_id' => 'required',
        ]);

        if (isset($request->post_id)){
            $posts=Post::find($request->post_id);
            $posts['categories']=$posts->categories()->get();
        }else{
            $show_posts=Post::select('id','title','description','image','created_at')->paginate(10);
            $posts=array();
            foreach ($show_posts as $post){
                $p=$post;
                $p['categories']=$post->categories()->get();
                array_push($posts,$p);
            }
        }
        return response()->json(['success' => $posts], $this-> successStatus);
    }

    public function show_blog_categories()
    {

        $categories_show=Post_category::all();

        $cc=array();
        foreach ($categories_show as $category) {
            if ($category->parent_category_id == null) {
                $cat['id']=$category->id;
                $cat['title']=$category->title;
                $cat['image']=$category->image;
                $subcategories=Post_category::where('parent_category_id',$category->id)->select('id', 'title','image')->get();
                $cat['sub_category']=$subcategories;
//                $category = Adviser_category::select('id', 'name')->get();
                array_push($cc,$cat);
            }
        }

        return response()->json(['success' => $cc], $this-> successStatus);

    }
}
