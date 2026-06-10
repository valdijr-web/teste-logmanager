<?php

namespace Database\Factories;

use App\Models\Driver;
use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $status = $this->faker->randomElement([
            Order::STATUS_PENDING,
            Order::STATUS_DELIVERED,
        ]);
        return [
            'driver_id' => Driver::factory(),
            'code' => strtoupper($this->faker->unique()->bothify('PED-####')),
            'delivery_address' => $this->faker->streetAddress,
            'status' => $status,
            'delivered_at' => $status === Order::STATUS_DELIVERED
                ? $this->faker->dateTimeBetween('-30 days', 'now')
                : null,
        ];
    }

     public function pending()
    {
        return $this->state(function () {
            return [
                'status' => Order::STATUS_PENDING,
                'delivered_at' => null,
            ];
        });
    }

    public function delivered()
    {
        return $this->state(function () {
            return [
                'status' => Order::STATUS_DELIVERED,
                'delivered_at' => $this->faker->dateTimeBetween('-30 days', 'now'),
            ];
        });
    }
}
