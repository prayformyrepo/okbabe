<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = ['subject','user_id','ticket_category_id','status','text'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function ticketCategory()
    {
        return $this->belongsTo(Ticket_category::class);
    }

    public function ticketAnswers()
    {
        return $this->hasMany(Ticket_answer::class);
    }
}
