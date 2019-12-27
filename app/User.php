<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;


class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'mobile', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function adviser($user)
    {
        $adviser_id=Adviser::where('user_id',$user->id)->value('id');
        return Adviser::find($adviser_id);
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function toArray()
    {
        return [
          'id'=>$this->id ,
           'name'=> $this->name != null ? $this->name : $this->username  ,
           'avatar'=>$this->avatar
        ];
    }


}
