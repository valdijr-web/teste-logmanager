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
        // Cenário 1: Concluído - 100% entregue
        $completedDriver = Driver::factory()->create([
            'name' => 'Carlos Silva',
        ]);

        Order::factory()
            ->count(5)
            ->delivered()
            ->create([
                'driver_id' => $completedDriver->id,
            ]);

        // Cenário 2: Próximo de terminar - mais de 50% entregue
        $almostDoneDriver = Driver::factory()->create([
            'name' => 'Marcos Oliveira',
        ]);

        Order::factory()
            ->count(4)
            ->delivered()
            ->create([
                'driver_id' => $almostDoneDriver->id,
            ]);

        Order::factory()
            ->count(2)
            ->pending()
            ->create([
                'driver_id' => $almostDoneDriver->id,
            ]);

        // Cenário 3: Em alerta - 50% ou menos entregue
        $alertDriver = Driver::factory()->create([
            'name' => 'João Pereira',
        ]);

        Order::factory()
            ->count(2)
            ->delivered()
            ->create([
                'driver_id' => $alertDriver->id,
            ]);

        Order::factory()
            ->count(4)
            ->pending()
            ->create([
                'driver_id' => $alertDriver->id,
            ]);
    }
}
