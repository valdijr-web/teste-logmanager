<?php

namespace Database\Seeders;

use App\Models\Driver;
use App\Models\Order;
use Illuminate\Database\Seeder;

class DriverOrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $totalPerScenario = 10;

        // Cenário 1: Concluído - 100% entregue
        Driver::factory()
            ->count($totalPerScenario)
            ->create()
            ->each(function (Driver $driver) {
                Order::factory()
                    ->count(5)
                    ->delivered()
                    ->create([
                        'driver_id' => $driver->id,
                    ]);
            });

        // Cenário 2: Próximo de terminar - mais de 50% entregue
        Driver::factory()
            ->count($totalPerScenario)
            ->create()
            ->each(function (Driver $driver) {
                Order::factory()
                    ->count(4)
                    ->delivered()
                    ->create([
                        'driver_id' => $driver->id,
                    ]);

                Order::factory()
                    ->count(2)
                    ->pending()
                    ->create([
                        'driver_id' => $driver->id,
                    ]);
            });

        // Cenário 3: Em alerta - 50% ou menos entregue
        Driver::factory()
            ->count($totalPerScenario)
            ->create()
            ->each(function (Driver $driver) {
                Order::factory()
                    ->count(2)
                    ->delivered()
                    ->create([
                        'driver_id' => $driver->id,
                    ]);

                Order::factory()
                    ->count(4)
                    ->pending()
                    ->create([
                        'driver_id' => $driver->id,
                    ]);
            });
    }
}
