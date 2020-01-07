<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDrugFactorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drug_factors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('drug_request_id')->index();
            $table->unsignedBigInteger('drug_store_id')->index();
            $table->unsignedBigInteger('drug_sender_id')->index();
            $table->unsignedBigInteger('total_price');


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
        Schema::dropIfExists('drug_factors');
    }
}
