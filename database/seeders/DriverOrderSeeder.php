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
        $faker = \Faker\Factory::create('pt_BR');

        // Cenário 1: Concluído - 100% entregue (mais antigo)
        Driver::factory()
            ->count($totalPerScenario)
            ->create()
            ->each(function (Driver $driver) use ($faker) {
                collect(range(1, 5))->each(function () use ($driver, $faker) {
                    $timestamp = $faker->dateTimeBetween('-3 days', '-2 days');

                    Order::factory()
                        ->delivered()
                        ->create([
                            'driver_id' => $driver->id,
                            'created_at' => $timestamp,
                            'updated_at' => $timestamp,
                            'delivered_at' => $timestamp,
                        ]);
                });
            });

        // Cenário 2: Próximo de terminar - mais de 50% entregue (médio)
        Driver::factory()
            ->count($totalPerScenario)
            ->create()
            ->each(function (Driver $driver) use ($faker) {
                collect(range(1, 4))->each(function () use ($driver, $faker) {
                    $timestamp = $faker->dateTimeBetween('-2 days', '-1 days');

                    Order::factory()
                        ->delivered()
                        ->create([
                            'driver_id' => $driver->id,
                            'created_at' => $timestamp,
                            'updated_at' => $timestamp,
                            'delivered_at' => $timestamp,
                        ]);
                });

                collect(range(1, 2))->each(function () use ($driver, $faker) {
                    $timestamp = $faker->dateTimeBetween('-2 days', '-1 days');

                    Order::factory()
                        ->pending()
                        ->create([
                            'driver_id' => $driver->id,
                            'created_at' => $timestamp,
                            'updated_at' => $timestamp,
                        ]);
                });
            });

        // Cenário 3: Em alerta - 50% ou menos entregue (mais recente)
        Driver::factory()
            ->count($totalPerScenario)
            ->create()
            ->each(function (Driver $driver) use ($faker) {
                collect(range(1, 2))->each(function () use ($driver, $faker) {
                    $timestamp = $faker->dateTimeBetween('-1 days', 'now');

                    Order::factory()
                        ->delivered()
                        ->create([
                            'driver_id' => $driver->id,
                            'created_at' => $timestamp,
                            'updated_at' => $timestamp,
                            'delivered_at' => $timestamp,
                        ]);
                });

                collect(range(1, 4))->each(function () use ($driver, $faker) {
                    $timestamp = $faker->dateTimeBetween('-1 days', 'now');

                    Order::factory()
                        ->pending()
                        ->create([
                            'driver_id' => $driver->id,
                            'created_at' => $timestamp,
                            'updated_at' => $timestamp,
                        ]);
                });
            });
    }
}
