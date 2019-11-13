<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{


    public function messages()
    {
        return $this->belongsToMany(Message::class,'conversation__messages')->orderBy('id','DESC');
    }
}