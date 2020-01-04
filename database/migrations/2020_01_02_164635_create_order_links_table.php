<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_links', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('link')->nullable();
            $table->boolean('used')->default(false);
            $table->timestamp('time_used')->nullable();
            $table->bigInteger('order_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->bigInteger('product_id')->unsigned();

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
        Schema::dropIfExists('order_links');
    }
}
