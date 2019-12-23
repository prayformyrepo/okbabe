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
//        $validator = Validator::make($request->all(), [
//            'post_id' => 'required',
//        ]);

        if (isset($request->post_id)){
            $posts=Post::find($request->post_id);
            $posts['categories']=$posts->categories()->get();
        }
        else if (isset($request->category)){
            if ($request->category=='0') { //nino
                $category_id=149518063;
                $show_posts = Post::select('id', 'title', 'description','content', 'image', 'created_at')->orderBy('id', 'DESC')->paginate(10);
                $posts = array();
                foreach ($show_posts as $post) {
                    $categories=$post->categories()->get();
                    $flag=false;

                    foreach ($categories as $category){
                        if ($category->id==$category_id) $flag=true;
                    }
                    if ($flag==true) {
                        $p = $post;
                        $p['categories'] = $post->categories()->get();
                        array_push($posts, $p);
                    }
                }
            }

            else if ($request->category=='1') { //shino
                $category_id=149048146;
                $show_posts = Post::select('id', 'title', 'description','content','image', 'created_at')->orderBy('id', 'DESC')->paginate(10);
                $posts = array();
                foreach ($show_posts as $post) {
                    $categories=$post->categories()->get();
                    $flag=false;

                    foreach ($categories as $category){
                        if ($category->id==$category_id) $flag=true;
                    }
                    if ($flag==true) {
                        $p = $post;
                        $p['categories'] = $post->categories()->get();
                        array_push($posts, $p);
                    }
                }
            }

            else if ($request->category=='2') { //dino
                $category_id=149519032;
                $show_posts = Post::select('id', 'title', 'description','content', 'image', 'created_at')->orderBy('id', 'DESC')->paginate(10);
                $posts = array();
                foreach ($show_posts as $post) {
                    $categories=$post->categories()->get();
                    $flag=false;

                    foreach ($categories as $category){
                        if ($category->id==$category_id) $flag=true;
                    }
                    if ($flag==true) {
                        $p = $post;
                        $p['categories'] = $post->categories()->get();
                        array_push($posts, $p);
                    }
                }
            }
        }

        else{
            $show_posts=Post::select('id','title','description','content','image','created_at')->orderBy('id','DESC')->paginate(10);
            $posts=array();
            foreach ($show_posts as $post){
                $p=$post;
                $p['categories']=$post->categories()->get();
                array_push($posts,$p);
            }
        }
        if (!isset($request->post_id)) {
            $paginate['total'] = $show_posts->total();
            $paginate['per_page'] = $show_posts->perPage();
            $paginate['current_page'] = $show_posts->currentPage();
            $paginate['last_page'] = $show_posts->lastPage();
            $paginate['has_more_pages'] = $show_posts->hasMorePages();
            $paginate['next_page_url'] = $show_posts->nextPageUrl();
            $paginate['previous_page_url'] = $show_posts->previousPageUrl();
            return response()->json(['success' => $posts,"pagination"=>$paginate], $this-> successStatus);
        }
        else{
            return response()->json(['success' => $posts], $this-> successStatus);
        }
    }

    public function show_blog_categories()
    {

        $categories_show=Post_category::all();



        return response()->json(['success' => $categories_show], $this-> successStatus);

    }
}
