<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Route::get('/gpost','mainController@gpost');
//Route::get('/gcategory','mainController@gcategory');
//Route::get('/open',function (){
//    return view('test');
//});
//Route::post('/testopen','mainController@test_inp');



//Route::get('token',function(){
//    Artisan::call('passport:client --personal');
//});

Route::get('migrate',function(){
    Artisan::call('migrate');
    die('migrate complete');

});

Route::get('cache',function(){
    Artisan::call('cache:clear');
    die('cache cleared');
});

Route::get('call',function (){
    return view('call');
});

Route::get('seg',function (){

    $client = new \GuzzleHttp\Client(['base_uri' => 'https://app.najva.com/api/v1']);
// Send a request to https://foo.com/api/test
//    $response = $client->request('GET', 'https://app.najva.com/api/v1/websites/e85cbfc1-44d7-4ed6-bc7d-e514ec12c240/segments/');

    $response=$client->request('GET', 'https://app.najva.com/api/v1/websites/e85cbfc1-44d7-4ed6-bc7d-e514ec12c240/segments/', [
        'headers' => [
            'Authorization' => 'Token d7b914743b31e690f294099c6c45c55be7949483',
            'Content-Type'     => 'application/json'
        ]
    ]);
    $body = $response->getBody();
    var_dump( $body);
});

Route::get('/pay/callback', 'WalletController@verify');

//Route::get('/test',function(){
//    $weekMap = [
//
//        0 => 1,
//        1 => 2,
//        2 => 3,
//        3 => 4,
//        4 => 5,
//        5 => 6,
//        6 => 0,
//    ];
//    $dayOfTheWeek = \Carbon\Carbon::now()->dayOfWeek;
//    $weekday = $weekMap[$dayOfTheWeek];
//    $hour = \Carbon\Carbon::now()->format('G');
//    echo $hour;
//});