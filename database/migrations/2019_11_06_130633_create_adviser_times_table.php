<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdviserTimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adviser_times', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('adviser_id')->index();
            $table->unsignedInteger('date');
            $table->unsignedInteger('time_from');
            $table->unsignedInteger('time_to');

            $table->timestamps();

            $table->foreign('adviser_id')
                ->references('id')->on('advisers')
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
        Schema::dropIfExists('adviser_times');
    }
}
