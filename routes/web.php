<?php

use App\Http\Controllers\PriceAlertController;
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
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/alerts', [PriceAlertController::class, 'index'])->name('alerts.index');
    Route::get('/alerts/create', [PriceAlertController::class, 'create'])->name('alerts.create');
    Route::post('/alerts', [PriceAlertController::class, 'store'])->name('alerts.store');
});

require __DIR__.'/auth.php';
