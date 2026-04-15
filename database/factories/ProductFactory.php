<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        $basePrice = fake()->randomFloat(2, 20, 300);
        return [
            'platform_product_id' => 'gid://shopify/ProductVariant/' . fake()->unique()->randomNumber(8, true),
            'name' => fake()->words(3, true),
            'competitor_url' => fake()->url(),
            'current_price' => $basePrice,
            'floor_price' => $basePrice * 0.7,   // Floor is 30% below current
            'ceiling_price' => $basePrice * 1.3, // Ceiling is 30% above current
            'last_scraped_at' => fake()->dateTimeBetween('-1 week', 'now'),
        ];
    }
}