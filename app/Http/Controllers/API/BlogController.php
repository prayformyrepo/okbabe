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
        $paginate['total']=$show_posts->total();
        $paginate['per_page']=$show_posts->perPage();
        $paginate['current_page']=$show_posts->currentPage();
        $paginate['last_page']=$show_posts->lastPage();
        $paginate['has_more_pages']=$show_posts->hasMorePages();
        $paginate['next_page_url']=$show_posts->nextPageUrl();
        $paginate['previous_page_url']=$show_posts->previousPageUrl();
        return response()->json(['success' => $posts,"pagination"=>$paginate], $this-> successStatus);
    }

    public function show_blog_categories()
    {

        $categories_show=Post_category::all();
        $cc=array();
        foreach ($categories_show as $category){
            if ($category->parent_category_id==null){
                $c['id']=$category->id;
                $c['title']=$category->title;
                $c['image']=$category->image;
                $subs=Post_category::where('parent_category_id',$category->id)->count();
                if ($subs!=null){
                    $c['subs']=$category->sub_categories($category->id);
                    array_push($cc,$c);
                }
                array_push($cc,$c);

            }
        }


        return response()->json(['success' => $cc], $this-> successStatus);

    }
}
