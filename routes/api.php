<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//login with pass
Route::post('login', 'API\UserController@login');
//Route::post('mobile-login', 'API\UserController@mobile_login');

//login or reg
Route::post('auth', 'API\UserController@auth');

//remove pass
Route::post('reset-password', 'API\UserController@reset_password');


Route::group(['middleware' => 'auth:api'], function(){

    //auth
    Route::post('validation', 'API\UserController@validation');

    Route::group(['middleware' => 'mobile_verify'], function() {

        Route::post('user-info', 'API\UserController@user_info');
        Route::post('set-data', 'API\UserController@set_data');

        //toggle online-offline
        Route::post('toggle-online', 'API\UserController@toggle_online');

        //conversations
        Route::post('request-conversation', 'API\ConversationController@request_conversation');
        Route::post('fetch-conversations', 'API\ConversationController@fetch_conversations');
        Route::post('fetch-messages', 'API\ConversationController@fetch_messages');
        Route::post('send-message', 'API\ConversationController@send_message');
        Route::post('fetch-message-by-id', 'API\ConversationController@fetch_message_by_id');

        //advisers
        Route::post('show-advisers', 'API\AdviserController@show_advisers');
        Route::post('save-adviser', 'API\AdviserController@save_adviser');
        Route::post('show-adviser-categories', 'API\AdviserController@show_adviser_categories');

        Route::group(['middleware' => 'administrator'], function() {
            Route::post('add-adviser', 'API\AdviserController@add_adviser');
            Route::post('add-adviser-category', 'API\AdviserController@add_adviser_category');
            Route::post('assign-adviser-to-category', 'API\AdviserController@assign_adviser_to_category');
            Route::post('add-adviser-time', 'API\AdviserController@add_adviser_time');
        });

        //events
        Route::post('show-events', 'API\EventController@show_events');


        //notifications
        Route::post('read-notification', 'API\notificationController@read_notification');
        Route::post('get-notifications', 'API\notificationController@get_notifications');

        //questions
        Route::post('add-question', 'API\QuestionController@add_question');
        Route::post('show-questions', 'API\QuestionController@show_questions');
        Route::post('accept-question', 'API\QuestionController@accept_question');
        Route::post('like-question', 'API\QuestionController@like_question');
        Route::post('view-question', 'API\QuestionController@view_question');
        Route::post('answer-question', 'API\QuestionController@answer_question');
        Route::post('show-question', 'API\QuestionController@show_question');


        //wallet
        Route::post('pay', 'API\WalletController@pay');


        //search
        Route::post('universal-search', 'API\SearchController@universal_search');

    });


});

