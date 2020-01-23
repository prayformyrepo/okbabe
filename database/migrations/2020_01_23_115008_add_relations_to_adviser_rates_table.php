<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToAdviserRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('adviser_rates', function (Blueprint $table) {
//            $table->foreign('adviser_id')->references('id')->on('advisers')->onDelete('cascade');
            $table->unsignedInteger('user_id')->index()->change();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('adviser_rates', function (Blueprint $table) {
            //
        });
    }
}
