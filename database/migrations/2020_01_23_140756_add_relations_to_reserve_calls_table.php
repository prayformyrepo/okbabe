<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationsToReserveCallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reserve_calls', function (Blueprint $table) {

            $table->unsignedInteger('user_id')->index()->change();
            $table->unsignedInteger('adviser_id')->index()->change();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('adviser_id')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reserve_calls', function (Blueprint $table) {
            //
        });
    }
}
