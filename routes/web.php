<?php

/*callback
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
Route::get('/pay/verify-product', 'API\OrderController@verifyPay');


//User Panel
/*Route::group(['middleware' => 'guest'], function () {
    Route::get('/auth', 'Users\AuthController@showAuthForm')->name('user.showAuth');
    Route::post('/auth', 'Users\AuthController@login')->name('user.login');
});*/

//Admin Login
Route::get('admin/login',['as'=>'admin.login','uses'=>'Admins\LoginController@showLoginForm']);
Route::post('admin/login',['as'=>'admin.auth','uses'=>'Admins\LoginController@login']);
Route::get('admin/logout',['as'=>'admin.logout','uses'=>'Admins\LoginController@logout']);


//Admin Panel

Route::group(['middleware' => 'admin','prefix'=>'admin','as'=>'admin.'], function () {
    //Dashboard
    Route::get('/',['as'=>'panel','uses'=>'Admins\AdminController@panel']);


    // Test Manage
    Route::group(['as'=>'test.'],function () {
        Route::get('/select-test', 'TestController@index')->name('show-select-test-page');

        Route::get('/add-test', 'TestController@create')->name('show-add-test-page');
        Route::post('/add-test', 'TestController@store')->name('add-test');

        Route::post('/assign-test/{test_id}', 'TestController@assign_test')->name('assign-test');
        Route::post('/edit-test/{test_id}', 'TestController@edit_test')->name('edit-test');
        Route::post('/update-test/{id}', 'TestController@update')->name('update-test');

        Route::delete('/test/{test_id}', 'TestController@destroy')->name('destroy');
        Route::get('/add-test-question', 'TestQuestionController@create')->name('show-test-question-page');
        Route::post('/add-test-question', 'TestQuestionController@store')->name('test-question-page');

        Route::get('/select-test', 'TestController@index')->name('show-select-test-page');

    });
        // Product Manage
        Route::get('product',['uses'=>'ProductController@index','as'=>'product.index']);
        Route::get('product/create',['uses'=>'ProductController@create','as'=>'product.create']);
        Route::get('product/edit/{product}',['uses'=>'ProductController@edit','as'=>'product.edit']);
         Route::patch('product/update/{product}',['uses'=>'ProductController@update','as'=>'product.update']);

        Route::delete('product/destroy/{product}',['uses'=>'ProductController@delete','as'=>'product.destroy']);

        Route::patch('product/image/update',['uses'=>'ProductController@ProductImage','as'=>'product.image-update']);

        Route::delete('product/image/delete',['uses'=>'ProductController@deleteProductImage','as'=>'product.image-delete']);

    Route::get('tickets',['uses'=>'Admins\TicketController@index','as'=>'ticket.index']);
    Route::delete('/tickets/{ticket_id}', 'Admins\TicketController@destroy')->name('ticket.destroy');
    Route::get('/tickets/{ticket_id}', 'Admins\TicketController@show_ticket')->name('ticket.show');
    Route::post('/tickets/{ticket_id}', 'Admins\TicketController@answer_ticket')->name('ticket.answer');

    Route::get('advisers',['uses'=>'Admins\AdviserController@index','as'=>'adviser.index']);
    Route::delete('/advisers/{adviser_id}', 'Admins\AdviserController@destroy')->name('adviser.destroy');
    Route::get('/advisers/{adviser_id}', 'Admins\AdviserController@show')->name('adviser.show');

    Route::post('/advisers/accept-adviser', 'Admins\AdviserController@accept_adviser')->name('adviser.accept');
    Route::post('/advisers/decline-adviser', 'Admins\AdviserController@decline_adviser')->name('adviser.decline');

});

//add adviser
Route::get('/add-adviser', 'Advisers\AdviserController@create')->name('add-adviser');
Route::post('/add-adviser', 'Advisers\AdviserController@store')->name('store-adviser');



Route::any('captcha-test', function() {
    if (request()->getMethod() == 'POST') {
        $rules = ['captcha' => 'required|captcha'];
        $validator = validator()->make(request()->all(), $rules);
        if ($validator->fails()) {
            echo '<p style="color: #ff0000;">Incorrect!</p>';
        } else {
            echo '<p style="color: #00ff30;">Matched :)</p>';
        }
    }

    $form = '<form method="post" action="captcha-test">';
    $form .= '<input type="hidden" name="_token" value="' . csrf_token() . '">';
    $form .= '<p>' . captcha_img() . '</p>';
    $form .= '<p><input type="text" name="captcha"></p>';
    $form .= '<p><button type="submit" name="check">Check</button></p>';
    $form .= '</form>';
    return $form;
});

//index Page
Route::get('/home', 'HomeController@index')->name('home');

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

Route::get('config', function () {
    Artisan::call('config:clear');
    die('cache cleared');
});

Route::get('config-cache', function () {
    Artisan::call('config:cache');
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


Route::get('now', function () {
    echo \Carbon\Carbon::now()->format('dmyHi');
});




Route::get('/get_captcha/{config?}', function (\Mews\Captcha\Captcha $captcha) {
    return $captcha->src();
});