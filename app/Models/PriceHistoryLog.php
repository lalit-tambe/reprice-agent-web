<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PriceHistoryLog extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'product_id',
        'action_taken',
        'old_price',
        'new_price',
        'raw_scraper_data',
        'sentiment_score',
        'ai_reasoning',
        'embedding',
    ];

    protected function casts(): array
    {
        return [
            'old_price' => 'decimal:2',
            'new_price' => 'decimal:2',
            'raw_scraper_data' => 'array', // Automatically handles JSONB serialization
            'sentiment_score' => 'integer',
        ];
    }

    public function product(): BelongsTo
    {
        // Notice we explicitly chain withTrashed() here. 
        // If a user soft-deletes a product, the RAG chat history will still function correctly.
        return $this->belongsTo(Product::class)->withTrashed();
    }
}