<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTestAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_test_answers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('user_id')->index();
            $table->unsignedBigInteger('test_answer_id')->index();
            $table->unsignedBigInteger('test_question_id')->index();
            $table->unsignedBigInteger('test_id')->index();
            $table->timestamps();
        });

        Schema::table('user_test_answers',function (Blueprint $table){
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('test_answer_id')->references('id')->on('test_answers')->onDelete('cascade');
            $table->foreign('test_question_id')->references('id')->on('test_questions')->onDelete('cascade');
            $table->foreign('test_id')->references('id')->on('tests')->onDelete('cascade');

        });

        }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_test_answers');
    }
}
