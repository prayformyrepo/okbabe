<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdviserRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adviser_rates', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('adviser_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedInteger('rate');
            $table->longText('comment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('adviser_rates');
    }
}
