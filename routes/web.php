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
})->name('index');


//pay callback
Route::get('/pay/callback', 'API\WalletController@verify');


//Route::view('panel', 'panel.index');
//
//Auth::routes();
//

Route::group(['middleware' => 'guest'], function () {

    Route::get('/auth', 'Users\AuthController@showAuthForm')->name('user.showAuth');
    Route::post('/auth', 'Users\AuthController@login')->name('user.login');
});

Route::get('/home', 'HomeController@index')->name('home');


Route::group(['middleware' => 'auth', 'prefix' => 'panel'], function () {
    Route::get('/select-test', 'TestController@index')->name('show-select-test-page');
    Route::get('/add-test', 'TestController@create')->name('show-add-test-page');
    Route::post('/add-test', 'TestController@store')->name('add-test');
    Route::post('/assign-test/{test_id}', 'TestController@assign_test')->name('assign-test');
    Route::post('/edit-test/{test_id}', 'TestController@edit_test')->name('edit-test');
    Route::post('/update-test/{id}', 'TestController@update')->name('update-test');

    Route::delete('/test/{test_id}', 'TestController@destroy')->name('test.destroy');


    Route::get('/add-test-question', 'TestQuestionController@create')->name('show-test-question-page');
    Route::post('/add-test-question', 'TestQuestionController@store')->name('test-question-page');

    Route::get('/select-test', 'TestController@index')->name('show-select-test-page');

});


///////////////////////////////////////////////

//update blog
Route::get('/gpost', 'mainController@gpost');
Route::get('/gcategory', 'mainController@gcategory');
Route::get('/add-category', 'mainController@add_category');


//artisan commands
Route::get('migrate', function () {
    Artisan::call('migrate');
    die('migrate complete');

});

Route::get('cache', function () {
    Artisan::call('cache:clear');
    die('cache cleared');
});

//test routes

Route::get('call', function () {
    return view('call');
});

Route::get('online-mohi', function () {
    $us = \App\User::all();
    foreach ($us as $u) {
        $u->is_online = 1;
        $u->save();
    }

    $as = \App\Adviser::all();
    foreach ($as as $a) {
        $a->is_online = 1;
        $a->save();
    }
    return 'online shod!';

});

Route::get('unbusy-mohi', function () {


    $as = \App\Adviser::all();
    foreach ($as as $a) {
        $a->is_busy = 0;
        $a->save();
    }
    return 'unbusy shod!';

});

Route::get('ttime', function () {
    $today = strtotime(\Carbon\Carbon::now()->format('H:i'));
//    $last=\Carbon\Carbon::now()->format('H:i');
    $first = strtotime('00:00');
    $last = strtotime('23:59');
    if ($today < $last && $today > $first) {
        echo 'yes';
    } else {
        echo 'no';
    }


});



