<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{

    protected $appends=['last_message_text'];

    public function messages()
    {
        return $this->belongsToMany(Message::class,'conversation__messages')->orderBy('id','DESC');
    }


    public function getLastMessageTextAttribute()
    {
        if ($this->last_message_id!=null) {
            $text = Message::find($this->last_message_id);
            return $text->text;
        }
    }
}