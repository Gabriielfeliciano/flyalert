<?php

namespace App\Http\Controllers;

use App\Models\PriceAlert;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PriceAlertController extends Controller
{
    public function index()
    {
        return Inertia::render('PriceAlerts/Index', [
            'alerts' => auth()->user()->priceAlerts()->latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('PriceAlerts/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'origin' => 'required|string|size:3',
            'destination' => 'required|string|size:3|different:origin',
            'departure_date' => 'required|date|after:today',
            'target_price' => 'required|numeric|min:1',
        ]);

        auth()->user()->priceAlerts()->create($validated);

        return redirect()->route('alerts.index')
            ->with('success', 'Alerta criado com sucesso!');
    }
}
