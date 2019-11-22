<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ticket_answers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->longText('text');
            $table->integer('status')->default(0);  //0: system answer 1 : user answer
            $table->unsignedInteger('admin_id')->nullable();
            $table->unsignedBigInteger('ticket_id');
            $table->timestamps();
        });

        Schema::table('ticket_answers',function (Blueprint $table){

           $table->foreign('admin_id')->references('id')->on('admins')->onDelete('cascade');
           $table->foreign('ticket_id')->references('id')->on('tickets')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ticket_answers');
    }
}
