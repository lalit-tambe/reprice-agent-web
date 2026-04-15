<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class StoreFactory extends Factory
{
    public function definition(): array
    {
        return [
            'platform' => fake()->randomElement(['shopify', 'amazon']),
            'store_domain' => fake()->domainName(),
            'access_token' => encrypt(fake()->md5()),
            'is_active' => fake()->boolean(90), // 90% chance of being active
        ];
    }
}