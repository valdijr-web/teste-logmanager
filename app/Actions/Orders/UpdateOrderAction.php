<?php

namespace App\Actions\Orders;

use App\Models\Order;
use Illuminate\Support\Facades\Log;

class UpdateOrderAction
{
    public function execute(Order $order, array $data): Order
    {
        $order->fill([
            'delivery_address' => $data['delivery_address'] ?? $order->delivery_address,
            'status' => $data['status'] ?? $order->status,
        ]);

        $order->save();

        return $order;
    }
}
