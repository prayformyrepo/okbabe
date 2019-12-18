<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('language')->nullable();
            $table->unsignedInteger('pages')->nullable();
            $table->string('size')->nullable();
            $table->string('author')->nullable();
            $table->string('translator')->nullable();
            $table->dateTime('published_date')->nullable();
            $table->string('publisher')->nullable();
            $table->unsignedInteger('product_type_id');

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
        Schema::dropIfExists('products');
    }
}
