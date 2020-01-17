<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDrugPerFactorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drug_per_factors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('drug_factor_id')->index();
            $table->string('drug_name');
            $table->unsignedBigInteger('qty');
            $table->unsignedBigInteger('price');
            $table->unsignedBigInteger('image_id')->index()->nullable();

            $table->timestamps();
        });

        Schema::table('drug_per_factors',function (Blueprint $table){
            $table->foreign('drug_factor_id')->references('id')->on('drug_factors')->onDelete('cascade');
            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('drug_per_factors');
    }
}
