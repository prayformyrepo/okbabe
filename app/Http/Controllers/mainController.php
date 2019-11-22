<?php

namespace App\Http\Controllers;

use App\Adviser;
use App\Post;
use App\Post_category;
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
                $addpost = new Post();
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
                echo $values->title . ' added<br>';
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
                    if ($values2->type == 'blog' && $values2->subset != null) {
                        if ($values2->title == 'کسب و کار') {
                            $subsets2 = $values2->subset;
                            foreach (array_reverse($subsets2) as $name3 => $values3) {
                                if ($values3->type == 'blog' && $values3->subset != null) {
                                    if ($values3->title == 'آشنایی با مشاغل') {
                                        $subsets3 = $values3->subset;
                                        foreach (array_reverse($subsets3) as $name4 => $values4) {
                                            $category = new Post_category();
                                            $category->title = $values4->title;
                                            $category->url = $values4->url;
                                            $category->description = $values4->description;
                                            $category->image = $values4->image;
                                            $category->parent_category_id = 57;
                                            $category->save();
                                            echo $values4->title . '<br>';
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
