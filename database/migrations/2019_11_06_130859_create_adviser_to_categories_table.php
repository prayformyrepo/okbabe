<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdviserToCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adviser_to_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('adviser_id')->index();
            $table->unsignedBigInteger('adviser_category_id')->index();

            $table->timestamps();

            $table->foreign('adviser_id')
                ->references('id')->on('advisers')
                ->onDelete('cascade') ->onUpdate('cascade');

            $table->foreign('adviser_category_id')
                ->references('id')->on('adviser_categories')
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
        Schema::dropIfExists('adviser_to_categories');
    }
}
