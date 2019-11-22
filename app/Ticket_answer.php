<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket_answer extends Model
{
    protected $fillable=['text','status','admin_id','ticket_id'];

    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }

    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }
}
