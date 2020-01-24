<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\LikePost;
use App\Post;
use App\Post_category;
use App\ViewPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            $liked=LikePost::where('user_id',Auth::user()->id)->where('post_id',$request->post_id)->count();

            $liked==0?$posts['is_liked']=0:$posts['is_liked']=1;

            $posts['categories']=$posts->categories()->get();

        }
        else if (isset($request->category)){
            if ($request->category=='0') { //nino
                $category_id=149518063;
                $show_posts = Post::select('id', 'title', 'description', 'image','likes','views', 'created_at')->where('main_category',149518063)->orderBy('id', 'DESC')->paginate(10);
                $posts = array();
                $count=0;
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
                        $count++;
                    }
                }
            }

            else if ($request->category=='1') { //dino
                $category_id=149048146;
                $show_posts = Post::select('id', 'title', 'description','likes','views', 'image', 'created_at')->where('main_category',149048146)->orderBy('id', 'DESC')->paginate(10);
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

            else if ($request->category=='2') { //shino
                $category_id=149519032;
                $show_posts = Post::select('id', 'title', 'description','likes','views', 'image', 'created_at')->where('main_category',149519032)->orderBy('id', 'DESC')->paginate(10);
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
            $show_posts=Post::select('id','title','description','likes','views','image','created_at')->orderBy('id','DESC')->paginate(10);
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

    public function view_post(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'post_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        @$post = Post::find($request->post_id);
        if (!isset($post)) return response()->json(['error' => 'not found'], 404);
        $user = Auth::user();
        $success = 'already viewed';

        $view = ViewPost::where('post_id', $request->post_id)->where('user_id', $user->id)->count();
        if ($view == 0) {
            $view = new ViewPost();
            $view->user_id = $user->id;
            $view->post_id = $request->post_id;
            $view->save();

            $post_l = Post::find($request->post_id);
            $post_l->views = $post_l->views + 1;
            $post_l->save();

            $success = 'viewd';
        }
        return response()->json(['success' => $success], $this->successStatus);
    }


    public function like_post(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'post_id' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        @$post = Post::find($request->post_id);
        if (!isset($post)) return response()->json(['error' => 'not found'], 404);
        $user = Auth::user();
        $like = LikePost::where('post_id', $request->post_id)->where('user_id', $user->id)->count();
        if ($like != 0) {
            $like_id = LikePost::where('post_id', $request->post_id)->where('user_id', $user->id)->value('id');
            LikePost::find($like_id)->delete();
            $question_l = Post::find($request->post_id);
            $question_l->likes = $question_l->likes - 1;
            $question_l->save();
            $success = 'disliked';
        } else {
            $like = new LikePost();
            $like->user_id = $user->id;
            $like->post_id = $request->post_id;
            $like->save();

            $question_l = Post::find($request->post_id);
            $question_l->likes = $question_l->likes + 1;
            $question_l->save();

            $success = 'liked';
        }
        return response()->json(['success' => $success], $this->successStatus);
    }
}
