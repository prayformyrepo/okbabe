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

    public function messagesByLastId($last)
    {
        return $this->belongsToMany(Message::class,'conversation__messages')->orderBy('id','DESC')->where('message_id', '>=', $last);
    }


    public function getLastMessageTextAttribute()
    {
        if ($this->last_message_id!=null) {
            $file_id=Message::find($this->last_message_id)->file_id;
            if($file_id==null) {
                $text = Message::find($this->last_message_id);
                return $text->text;
            }
            else{
                $message['type']='file';
                $message['file_name']=File::find($file_id)->orginal_name;
                return $message;

            }
        }
    }
}