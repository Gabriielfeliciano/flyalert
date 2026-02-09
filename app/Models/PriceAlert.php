<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PriceAlert extends Model
{
    use HasFactory;

    protected $fillable = [
        'origin',
        'destination',
        'departure_date',
        'target_price',
        'is_active',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

//     public function histories()
//     {
//         return $this->hasMany(PriceHistory::class);
//     }
}
