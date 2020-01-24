<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = ['file_path','orginal_name','file_type','slug','file_size'];
}
