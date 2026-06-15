<?php

namespace App\Http\Controllers\Api\V1;

use App\Actions\Orders\GetOrdersByIdDriverAction;
use App\Actions\Orders\UpdateOrderAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Driver;
use App\Models\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function ordersByDriver(Request $request, Driver $driver, GetOrdersByIdDriverAction $action): JsonResponse
    {
        $orders = $action->execute($driver->id, [
            'status' => $request->input('status', 'all'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
            'per_page' => $request->input('per_page', 10),
            'page' => $request->input('page'),
        ]);

        return response()->json($orders);
    }

    public function update(UpdateOrderRequest $request, Order $order, UpdateOrderAction $action): JsonResponse
    {
        $validated = $request->validated();

        $order = $action->execute($order, $validated);

        return response()->json([
            'message' => 'Pedido atualizado com sucesso.',
            'data' => $order,
        ]);
    }
}
