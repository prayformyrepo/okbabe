<?php

namespace App\Http\Controllers;

use App\Adviser;
use App\Post;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class mainController extends Controller
{
    public function gpost()
    {


        $client = new Client(['base_uri' => 'https://shaverno.com']);
// Send a request to https://foo.com/api/test
        $response = $client->request('GET', '/site/api/v1/blog/posts?page=1&size=100&archive=&author=&relation=&filter=&q=&sorting=');

        $body = $response->getBody();
        $items = json_decode($body);

        $posts=$items->posts;

        foreach (array_reverse($posts) as $name => $values) {
            $response2 = $client->request('GET', '/site/api/v1/blog/posts/'.$values->id);
            $body2 = $response2->getBody();
            $items2 = json_decode($body2);

            if (@$items2->post->categories) {
                $categories = array_reverse($items2->post->categories);
                $count= count( $categories);
            }
            else{
                $count=0;
            }
           $ok=0;
           if ($count!=0) {

               for ($i = 0; $i < $count; $i++) {
                   echo $categories[$i]->title . '<br>';
                   if ($categories[$i]->title == 'چیستانو') {
                       $ok = 1;
                   }
               }
           }
           if ($ok==1){

//                $addpost=new Post();
//                $addpost->title=$values->title;
//               $addpost->description=$values->description;
//               $addpost->content=$items2->post->content;
//               $addpost->image=$values->image;
//               $addpost->rate=$values->rate;
//               $addpost->rate_count=$values->rate_count;
//               $addpost->comments=$values->comments;
//               $addpost->url=$values->url;
//               $addpost->commenting_enabled=$items2->post->commenting_enabled;
//               $addpost->meta_title=$items2->post->meta_title;
//               $addpost->meta_description=$items2->post->meta_description;
//                $addpost->save();
               echo $values->title.' added<br>';
           }else{
               echo 'no<br>';
           }
            echo '<br><br>-----------<br>';
//            echo $values->title . ':'.$values->url.'<br>';

        }
    }

    public function test_inp(Request $request)
    {
        $blog =  Adviser::find(2);
        $blog->categories()->sync($request->test);

        return $request->test;
    }
}
