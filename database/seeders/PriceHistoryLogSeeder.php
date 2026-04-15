<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\PriceHistoryLog;
use Illuminate\Database\Seeder;

class PriceHistoryLogSeeder extends Seeder
{
    public function run(): void
    {
        $products = Product::all();

        foreach ($products as $product) {
            PriceHistoryLog::factory()->count(5)->create([
                'product_id' => $product->id,
            ]);
        }
    }
}