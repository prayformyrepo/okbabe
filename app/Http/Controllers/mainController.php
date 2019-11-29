<?php

namespace App\Http\Controllers;

use App\Adviser;
use App\Post;
use App\Post_category;
use App\Post_to_category;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class mainController extends Controller
{
    public function gpost(Request $request)
    {


        $client = new Client(['base_uri' => 'https://shaverno.com']);
// Send a request to https://foo.com/api/test
        $response = $client->request('GET', '/site/api/v1/blog/posts?page=' . $request->page . '&size=' . $request->size . '&archive=&author=&relation=&filter=&q=&sorting=');

        $body = $response->getBody();
        $items = json_decode($body);

        $posts = $items->posts;

        foreach (array_reverse($posts) as $name => $values) {
            $response2 = $client->request('GET', '/site/api/v1/blog/posts/' . $values->id);
            $body2 = $response2->getBody();
            $items2 = json_decode($body2);

            if (@$items2->post->categories) {
                $categories = array_reverse($items2->post->categories);
                $count = count($categories);
            } else {
                $count = 0;
            }
            $ok = 0;
            if ($count != 0) {

                for ($i = 0; $i < $count; $i++) {
                    echo $categories[$i]->title . '<br>';
                    if ($categories[$i]->title == 'چیستانو') {
                        $ok = 1;
                    }
                }
            }
            if ($ok == 1) {
//
                @$check=Post::find($values->id);
                if ($check==null){
                    echo  'nist<br>';
                $addpost = new Post();
                $addpost->id=$values->id;
                $addpost->title = $values->title;
                $addpost->description = $values->description;
                $addpost->content = $items2->post->content;
                $addpost->image = $values->image;
                $addpost->rate = $values->rate;
                $addpost->rate_count = $values->rate_count;
                $addpost->comments = $values->comments;
                $addpost->url = $values->url;
                $addpost->commenting_enabled = $items2->post->commenting_enabled;
                $addpost->meta_title = $items2->post->meta_title;
                $addpost->meta_description = $items2->post->meta_description;
                $addpost->save();
                echo $values->title . 'with id'.$values->id.' added<br>';
                }else{
                    echo 'hast<br>'.$check->title.'<br>';
                    }

            } else {
                echo 'no<br>';
            }
            echo '<br><br>-----------<br>';
//            echo $values->title . ':'.$values->url.'<br>';

        }
    }

    public function test_inp(Request $request)
    {
        $blog = Adviser::find(2);
        $blog->categories()->sync($request->test);

        return $request->test;
    }


    public function gcategory(Request $request)
    {

        $client = new Client(['base_uri' => 'https://shaverno.com']);
// Send a request to https://foo.com/api/test
        $response = $client->request('GET', '/site/api/v1/pages');

        $body = $response->getBody();
        $items = json_decode($body);
        $pages = $items->pages;
        foreach (array_reverse($pages) as $name => $values) {
            $title = $values->title;
            if ($title == 'چیستانو') {
                $subsets = $values->subset;
                foreach (array_reverse($subsets) as $name2 => $values2) {
                    $category = new Post_category();
                    $category->id=$values2->id;
                    $category->title = $values2->title;
                    $category->description = $values2->description;
                    $category->image = $values2->image;
                    $category->url = $values2->url;
                    $category->parent_category_id = 0;
                    $category->save();
                    echo $values2->title . '<br>';
                    $current_id = $category->id;
                    if ($values2->subset !== null) {
                        foreach (array_reverse($values2->subset) as $name3 => $values3) {
                            $category = new Post_category();
                            $category->id=$values3->id;
                            $category->title = $values3->title;
                            $category->description = $values3->description;
                            $category->image = $values3->image;
                            $category->url = $values3->url;
                            $category->parent_category_id = $current_id;
                            $category->save();
                            echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' . $values3->title . '<br>';

                            $current_id = $category->id;
                            if ($values3->subset !== null) {
                                foreach (array_reverse($values3->subset) as $name4 => $values4) {
                                    $category = new Post_category();
                                    $category->id=$values4->id;
                                    $category->title = $values4->title;
                                    $category->description = $values4->description;
                                    $category->image = $values4->image;
                                    $category->url = $values4->url;
                                    $category->parent_category_id = $current_id;
                                    $category->save();
                                    echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' . $values4->title . '<br>';

                                    $current_id = $category->id;

                                    if ($values4->subset !== null) {
                                        foreach (array_reverse($values4->subset) as $name5 => $values5) {
                                            $category = new Post_category();
                                            $category->id=$values5->id;
                                            $category->title = $values5->title;
                                            $category->description = $values5->description;
                                            $category->image = $values5->image;
                                            $category->url = $values5->url;
                                            $category->parent_category_id = $current_id;
                                            $category->save();
                                            echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' . $values5->title . '<br>';

                                            $current_id = $category->id;

                                            if ($values5->subset !== null) {
                                                foreach (array_reverse($values5->subset) as $name6 => $values6) {
                                                    $category = new Post_category();
                                                    $category->id=$values6->id;
                                                    $category->title = $values6->title;
                                                    $category->description = $values6->description;
                                                    $category->image = $values6->image;
                                                    $category->url = $values6->url;
                                                    $category->parent_category_id = $current_id;
                                                    $category->save();
                                                    echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' . $values6->title . '<br>';

                                                    $current_id = $category->id;

                                                    if ($values6->subset !== null) {
                                                        foreach (array_reverse($values6->subset) as $name7 => $values7) {
                                                            $category = new Post_category();
                                                            $category->id=$values7->id;
                                                            $category->title = $values7->title;
                                                            $category->description = $values7->description;
                                                            $category->image = $values7->image;
                                                            $category->url = $values7->url;
                                                            $category->parent_category_id = $current_id;
                                                            $category->save();
                                                            echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' . $values7->title . '<br>';

                                                            $current_id = $category->id;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    public function add_category()
    {
        $client = new Client(['base_uri' => 'https://shaverno.com']);

        $posts=Post::paginate(50);
        foreach ($posts as $post){
// Send a request to https://foo.com/api/test
            $response = $client->request('GET', '/site/api/v1/blog/posts/'.$post->id);

            $body = $response->getBody();
            $items = json_decode($body);

            $title = $items->post->title;
            $post_id = $items->post->id;
            $categories=$items->post->categories;
            echo $title.'<br>'.$post_id.'<br>';

            foreach (array_reverse($categories) as $name => $values) {
                @$check=Post_category::find($values->id);
                if ($check!=null) {
                    $add = new Post_to_category();
                    $add->post_id = $post_id;
                    $add->category_id = $values->id;
                    $add->save();
                    echo '<h1>'.$values->id.'saved</h1>';
                }

            }
            }
    }

}
