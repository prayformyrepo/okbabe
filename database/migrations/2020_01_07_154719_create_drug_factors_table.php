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

        Schema::table('drug_factors',function (Blueprint $table){
            $table->foreign('drug_request_id')->references('id')->on('drug_requests')->onDelete('cascade');
            $table->foreign('drug_store_id')->references('id')->on('drug_stores')->onDelete('cascade');
            $table->foreign('drug_sender_id')->references('id')->on('drug_senders')->onDelete('cascade');
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
