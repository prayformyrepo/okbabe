<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductFile extends Model
{
    protected $fillable = ['type','file_path','orginal_name','file_type','slug'];

}
