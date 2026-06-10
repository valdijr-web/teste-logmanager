<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public const STATUS_PENDING = 'Pendente';
    public const STATUS_DELIVERED = 'Entregue';

    protected $fillable = [
        'driver_id',
        'code',
        'delivery_address',
        'status',
        'delivered_at',
    ];

    protected $casts = [
        'delivered_at' => 'datetime',
    ];

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function scopeDelivered($query)
    {
        return $query->where('status', self::STATUS_DELIVERED);
    }

    public function scopePending($query)
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    public function isDelivered(): bool
    {
        return $this->status === self::STATUS_DELIVERED;
    }
}
