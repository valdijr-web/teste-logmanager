<?php

namespace Database\Factories;

use App\Models\Driver;
use App\Models\Order;
use Carbon\Carbon;
use DateTimeInterface;
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

        $createdAt = $this->resolveTimestamp();

        return [
            'driver_id' => Driver::factory(),
            'code' => strtoupper($this->faker->unique()->bothify('PED-####')),
            'delivery_address' => $this->faker->streetAddress,
            'status' => $status,
            'created_at' => $createdAt,
            'updated_at' => $createdAt,
            'delivered_at' => $status === Order::STATUS_DELIVERED
                ? $createdAt
                : null,
        ];
    }

    public function pending()
    {
        return $this->state(function (array $attributes) {
            $createdAt = $this->resolveTimestamp($attributes['created_at'] ?? null);

            return [
                'status' => Order::STATUS_PENDING,
                'created_at' => $createdAt,
                'updated_at' => $createdAt,
                'delivered_at' => null,
            ];
        });
    }

    public function delivered()
    {
        return $this->state(function (array $attributes) {
            $createdAt = $this->resolveTimestamp($attributes['created_at'] ?? null);

            return [
                'status' => Order::STATUS_DELIVERED,
                'created_at' => $createdAt,
                'updated_at' => $createdAt,
                'delivered_at' => $createdAt,
            ];
        });
    }

    protected function resolveTimestamp($value = null)
    {
        if ($value instanceof DateTimeInterface) {
            return Carbon::instance($value);
        }

        if ($value !== null) {
            return Carbon::parse($value);
        }

        return Carbon::now()
            ->subDays($this->faker->numberBetween(0, 2))
            ->subHours($this->faker->numberBetween(0, 23))
            ->subMinutes($this->faker->numberBetween(0, 59))
            ->subSeconds($this->faker->numberBetween(0, 59));
    }
}
