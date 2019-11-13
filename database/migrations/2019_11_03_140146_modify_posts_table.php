<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->string('title')->nullable()->change();
            $table->text('description')->nullable()->change();
            $table->text('image')->nullable()->change();
            $table->integer('rate')->nullable()->change();
            $table->integer('rate_count')->nullable()->change();
            $table->integer('comments')->nullable()->change();
            $table->string('url')->nullable()->change();
            $table->boolean('commenting_enabled')->nullable()->change();
            $table->text('meta_title')->nullable()->change();
            $table->longText('meta_description')->nullable()->change();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
