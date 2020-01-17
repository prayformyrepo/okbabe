<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDrugStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drug_stores', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('slug')->nullable();
            $table->text('description')->nullable();
            $table->text('address');
            $table->unsignedBigInteger('image_id')->index()->nullable();
            $table->string('lat');
            $table->string('long');
            $table->integer('status')->default(1);
            $table->timestamps();
        });
        Schema::table('drug_stores',function (Blueprint $table){
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
        Schema::dropIfExists('drug_stores');
    }
}
