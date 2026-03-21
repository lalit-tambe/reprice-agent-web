<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Ensure pgvector is enabled before table creation
        DB::statement('CREATE EXTENSION IF NOT EXISTS vector');

        Schema::create('price_history_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->string('action_taken', 50);
            $table->decimal('old_price', 10, 2);
            $table->decimal('new_price', 10, 2);
            $table->jsonb('raw_scraper_data')->nullable();
            $table->integer('sentiment_score')->nullable();
            $table->text('ai_reasoning');
            $table->timestamps();
        });

        // 2. Add the vector column via raw SQL to ensure exact (1536) dimension matching
        DB::statement('ALTER TABLE price_history_logs ADD COLUMN embedding vector(1536)');

        // 3. Create the specialized indexes for JSONB and HNSW Vector Search
        DB::statement('CREATE INDEX logs_scraper_data_gin ON price_history_logs USING gin (raw_scraper_data)');
        DB::statement('CREATE INDEX logs_embedding_hnsw ON price_history_logs USING hnsw (embedding vector_cosine_ops)');
    }

    public function down(): void
    {
        Schema::dropIfExists('price_history_logs');
        // Optional: DB::statement('DROP EXTENSION IF EXISTS vector'); 
        // We typically leave the extension active as other tables might use it.
    }
};