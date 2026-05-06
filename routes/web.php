<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('CommandCenter');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/products', function () {
    return Inertia::render('Products/Index');
})->middleware(['auth', 'verified'])->name('products.index');

Route::get('/products/{id}', function ($id) {
    return Inertia::render('Products/Show', [
        'product' => [
            'id' => $id,
            'name' => 'Premium Leather Tote',
            'sku' => 'BAG-001',
            'platform' => 'Shopify',
            'currentPrice' => 120.00,
            'stock' => 45,
            'status' => 'Active Tracking',
            'guardrails' => [
                'floorPrice' => '90.00',
                'ceilingPrice' => '150.00'
            ],
            'competitor' => [
                'url' => 'https://competitor.com/product',
                'trackingCount' => 3
            ],
            'logs' => [
                [
                    'id' => 1,
                    'date' => 'Today, 10:00 AM',
                    'scrapedPrice' => 115.00,
                    'sentimentScore' => 8,
                    'decision' => 'Held Price (Quality concerns)',
                    'actionType' => 'held'
                ],
                [
                    'id' => 2,
                    'date' => 'Yesterday, 10:00 AM',
                    'scrapedPrice' => 110.00,
                    'sentimentScore' => 9,
                    'decision' => 'Dropped to $110',
                    'actionType' => 'dropped'
                ]
            ]
        ]
    ]);
})->middleware(['auth', 'verified'])->name('products.show');

Route::get('/settings', function () {
    return Inertia::render('Settings/Index');
})->middleware(['auth', 'verified'])->name('settings.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
