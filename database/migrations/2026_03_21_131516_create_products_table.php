<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('store_id')->constrained()->cascadeOnDelete();
            $table->string('platform_product_id', 255);
            $table->string('name', 255);
            $table->text('competitor_url')->nullable();
            
            // Strict decimal(10,2) for all monetary values
            $table->decimal('current_price', 10, 2);
            $table->decimal('floor_price', 10, 2);
            $table->decimal('ceiling_price', 10, 2);
            
            $table->timestamp('last_scraped_at')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};