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
Route::get('/open',function (){
    return view('test');
});
Route::post('/testopen','mainController@test_inp');



Route::get('token',function(){
    Artisan::call('passport:client --personal');
});

Route::get('migrate',function(){
    Artisan::call('migrate');
});

Route::get('call',function (){
   return view('call');
});

Route::get('/pay/callback', 'WalletController@verify');