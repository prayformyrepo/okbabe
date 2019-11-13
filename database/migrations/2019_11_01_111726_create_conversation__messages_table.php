<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConversationMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conversation__messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('message_id')->index();
            $table->unsignedBigInteger('conversation_id')->index();
            $table->timestamps();



            $table->foreign('message_id')
                ->references('id')->on('messages')
                ->onDelete('cascade') ->onUpdate('cascade');

            $table->foreign('conversation_id')
                ->references('id')->on('conversations')
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
        Schema::dropIfExists('conversation__messages');
    }
}
