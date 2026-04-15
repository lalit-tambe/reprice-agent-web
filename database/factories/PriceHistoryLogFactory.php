<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PriceHistoryLogFactory extends Factory
{
    public function definition(): array
    {
        // Generate a 1536-dimensional mock vector for pgvector
        $fakeEmbedding = json_encode(array_fill(0, 1536, fake()->randomFloat(4, -0.05, 0.05)));
        
        return [
            'action_taken' => fake()->randomElement(['held', 'dropped', 'raised']),
            'old_price' => fake()->randomFloat(2, 20, 300),
            'new_price' => fake()->randomFloat(2, 20, 300),
            'raw_scraper_data' => [
                'competitor_price' => fake()->randomFloat(2, 15, 290), 
                'latest_reviews' => [fake()->sentence(), fake()->sentence()]
            ],
            'sentiment_score' => fake()->numberBetween(1, 10),
            'ai_reasoning' => fake()->paragraph(),
            'embedding' => $fakeEmbedding,
        ];
    }
}