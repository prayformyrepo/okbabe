<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostToCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_to_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('post_id')->index();
            $table->unsignedBigInteger('category_id')->index();

            $table->timestamps();

            $table->foreign('post_id')
                ->references('id')->on('posts')
                ->onDelete('cascade') ->onUpdate('cascade');

            $table->foreign('category_id')
                ->references('id')->on('post_categories')
                ->onDelete('cascade') ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_to_categories');
    }
}
