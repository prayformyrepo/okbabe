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


//pay callback
Route::get('/pay/callback', 'API\WalletController@verify');



Route::view('panel', 'panel.index');
//
//Auth::routes();
//

Route::get('/auth','Users\AuthController@showAuthForm')->name('user.showAuth');
Route::post('/login','Users\AuthController@login')->name('user.login');


Route::get('/home', 'HomeController@index')->name('home');



///////////////////////////////////////////////

//update blog
Route::get('/gpost','mainController@gpost');
Route::get('/gcategory','mainController@gcategory');
Route::get('/add-category','mainController@add_category');


//artisan commands
Route::get('migrate',function(){
    Artisan::call('migrate');
    die('migrate complete');

});

Route::get('cache',function(){
    Artisan::call('cache:clear');
    die('cache cleared');
});

//test routes

Route::get('call',function (){
    return view('call');
});

Route::get('online-mohi',function (){
    $us=\App\User::all();
    foreach ($us as $u) {
        $u->is_online = 1;
        $u->save();
    }

    $as=\App\Adviser::all();
    foreach ($as as $a) {
        $a->is_online = 1;
        $a->save();
    }
    return 'online shod!';

});

Route::get('unbusy-mohi',function (){


    $as=\App\Adviser::all();
    foreach ($as as $a) {
        $a->is_busy = 0;
        $a->save();
    }
    return 'unbusy shod!';

});

Route::get('ttime',function (){
    $today=strtotime(\Carbon\Carbon::now()->format('H:i'));
//    $last=\Carbon\Carbon::now()->format('H:i');
    $first=strtotime('00:00');
    $last=strtotime('23:59');
    if ($today<$last && $today>$first){
        echo 'yes';
    }else{
        echo 'no';
    }


});



