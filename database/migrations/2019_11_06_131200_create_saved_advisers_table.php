<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSavedAdvisersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('saved_advisers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('user_id')->index();
            $table->unsignedBigInteger('adviser_id')->index();

            $table->timestamps();

            $table->foreign('adviser_id')
                ->references('id')->on('advisers')
                ->onDelete('cascade') ->onUpdate('cascade');

            $table->foreign('user_id')
                ->references('id')->on('users')
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
        Schema::dropIfExists('saved_advisers');
    }
}
