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

Route::get('/gpost','mainController@gpost');
Route::get('/gcategory','mainController@gcategory');
Route::get('/add-category','mainController@add_category');
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