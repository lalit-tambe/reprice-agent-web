<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'store_id',
        'platform_product_id',
        'name',
        'competitor_url',
        'current_price',
        'floor_price',
        'ceiling_price',
        'last_scraped_at',
    ];

    protected function casts(): array
    {
        return [
            // Ensure prices are treated as exact decimals, not floats
            'current_price' => 'decimal:2',
            'floor_price' => 'decimal:2',
            'ceiling_price' => 'decimal:2',
            'last_scraped_at' => 'datetime',
        ];
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public function priceHistoryLogs(): HasMany
    {
        return $this->hasMany(PriceHistoryLog::class);
    }
}