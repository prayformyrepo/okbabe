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

//download product files
Route::get('product/file/{filelink}','API\OrderController@DownloadProductFile');


Route::group(['middleware' => 'auth:api'], function(){

    //auth
    Route::post('validation', 'API\UserController@validation');
    Route::post('remove-pass', 'API\UserController@remove_pass');

    Route::group(['middleware' => 'mobile_verify'], function() {

        Route::post('user-info', 'API\UserController@user_info');
        Route::post('set-data', 'API\UserController@set_data');

        Route::post('update-info', 'API\UserController@update_info');
        Route::post('change-pass', 'API\UserController@change_pass');



        //toggle online-offline
        Route::post('toggle-online', 'API\UserController@toggle_online');

        //conversations
        Route::post('request-conversation', 'API\ConversationController@request_conversation');
        Route::post('fetch-conversations', 'API\ConversationController@fetch_conversations');
        Route::post('fetch-messages', 'API\ConversationController@fetch_messages');
        Route::post('send-message', 'API\ConversationController@send_message');
        Route::post('send-file', 'API\ConversationController@send_file');
        Route::post('fetch-message-by-id', 'API\ConversationController@fetch_message_by_id');

        //advisers
        Route::post('show-advisers', 'API\AdviserController@show_advisers');
        Route::post('save-adviser', 'API\AdviserController@save_adviser');
        Route::post('show-adviser-categories', 'API\AdviserController@show_adviser_categories');
        Route::post('rate-adviser', 'API\AdviserController@rate_adviser');
        Route::post('accept-rate', 'API\AdviserController@accept_rate');
        Route::post('reach-adviser', 'API\AdviserController@reach_adviser');
        Route::post('force-toggle-online', 'API\AdviserController@force_toggle_online');
        Route::post('change-number', 'API\AdviserController@change_number');
        Route::post('add-time', 'API\AdviserController@add_time');
        Route::post('edit-time', 'API\AdviserController@edit_time');
        Route::post('delete-time', 'API\AdviserController@delete_time');
        Route::post('adviser-times', 'API\AdviserController@adviser_times');
        Route::post('adviser-comments', 'API\AdviserController@adviser_comments');




//        Route::group(['middleware' => 'administrator'], function() {
            Route::post('add-adviser', 'API\AdviserController@add_adviser');
            Route::post('add-adviser-category', 'API\AdviserController@add_adviser_category');
            Route::post('assign-adviser-to-category', 'API\AdviserController@assign_adviser_to_category');
            Route::post('add-adviser-time', 'API\AdviserController@add_adviser_time');

            //category
            Route::post('add-category-description', 'API\CategoryController@add_category_description');
            Route::post('show-categories', 'API\CategoryController@show_categories');

//        });

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
        Route::post('do-pay', 'API\WalletController@do_pay');
        Route::post('transaction-history', 'API\WalletController@transactions_history');


        //search
        Route::post('universal-search', 'API\SearchController@universal_search');
        Route::post('search-categories', 'API\SearchController@all_categories');
        Route::post('search-questions', 'API\SearchController@all_questions');
        Route::post('search-blog-categories', 'API\SearchController@all_blog_categories');
        Route::post('search-posts', 'API\SearchController@all_posts');
        Route::post('search-advisers', 'API\SearchController@all_advisers');
        Route::post('search-advisers-by-category', 'API\SearchController@all_advisers_by_category');



        //call
        Route::post('make-call', 'API\CallController@make_call');
        Route::post('end-call', 'API\CallController@end_call');
        Route::post('reject-call', 'API\CallController@reject_call');
        Route::post('call-history', 'API\CallController@call_history');
        Route::post('reason-call', 'API\CallController@reason_call');
        Route::post('show-call-note','API\CallController@show_call_note');
        Route::post('store-call-note','API\CallController@store_call_note');

        //tickets
        Route::post('create-ticket','API\TicketController@create_ticket');
        Route::post('answer-ticket','API\TicketController@answer_ticket');
        Route::post('end-ticket','API\TicketController@end_ticket');
        Route::post('show-tickets','API\TicketController@show_tickets');
        Route::post('ticket-categories','API\TicketController@ticket_categories');


        //posts
        Route::post('show-posts','API\BlogController@show_posts');
        Route::post('show-blog-categories','API\BlogController@show_blog_categories');
        Route::post('like-post','API\BlogController@like_post');
        Route::post('view-post','API\BlogController@view_post');

        //reserve call
        Route::post('reserve','API\ReserveController@reserve');
        Route::post('change-reserve-status','API\ReserveController@change_reserve_status');
        Route::post('reserve-history','API\ReserveController@reserve_history');
        Route::post('show-reserve-note','API\ReserveController@show_reserve_note');
        Route::post('store-reserve-note','API\ReserveController@store_reserve_note');


        //route
        Route::post('show-filter','API\filterController@show_filters');

        //shop for users
        Route::post('show-products','API\ProductController@showProducts');
        Route::post('featured-products','API\ProductController@featuredProducts');

        Route::post('show-product-categories','API\ProductController@showCategories');
        Route::post('store-product-comment','API\ProductController@commentStore');
        Route::post('add-cart','API\ProductController@addCart');
        Route::post('remove-cart','API\ProductController@removeCart');
        Route::post('show-cart','API\ProductController@showCart');

        Route::post('show-orders','API\OrderController@showOrders');

        Route::post('store-order','API\OrderController@storeOrder');
        Route::post('pay-product','API\OrderController@doPay');

        Route::post('create-download-link','API\OrderController@CreateDownloadLink');


        //drugs

        Route::post('request-drug','API\DrugStore\RequestController@request_drug');


        //tests

        Route::post('show-tests','API\TestController@show_tests');
        Route::post('save-test','API\TestController@save_test');
        Route::post('result-test','API\TestController@result_test');

        //algorithms
        Route::post('enrich','Test\Enrich47@show_result');
        Route::post('bdi2','Test\bdi2@show_result');



    });
});

Route::group(['middleware' => 'auth:api'], function() {

});

Route::get('post/{post_id}', 'API\BlogController@show_post');
