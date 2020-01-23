<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToAdviserToCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('adviser_to_categories', function (Blueprint $table) {
            $table->foreign('adviser_id')->references('id')->on('advisers')->onDelete('cascade');
            $table->foreign('adviser_category_id')->references('id')->on('adviser_categories')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('adviser_to_categories', function (Blueprint $table) {
            //
        });
    }
}
