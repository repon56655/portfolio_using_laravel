<?php

namespace App\Models\Frontend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FrontendModel extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'message'
    ];
}
