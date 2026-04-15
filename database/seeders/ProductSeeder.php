<?php

namespace Database\Seeders;

use App\Models\Store;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $stores = Store::all();

        foreach ($stores as $store) {
            Product::factory()->count(10)->create([
                'store_id' => $store->id,
            ]);
        }
    }
}