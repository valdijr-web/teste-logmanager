<?php

namespace App\Actions\Orders;

use App\Models\Order;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;

class GetOrdersByIdDriverAction
{
    public function execute(int $driverId, array $filters = []): LengthAwarePaginator
    {
        $query = Order::query()
            ->where('driver_id', $driverId)
            ->select(['id', 'code', 'delivery_address', 'status', 'delivered_at', 'created_at']);

        if (($filters['status'] ?? 'all') === 'delivered') {
            $query->where('status', Order::STATUS_DELIVERED);
        }

        $query->when($filters['start_date'] ?? null, fn(Builder $q, $start) => $q->whereDate('created_at', '>=', $start));
        $query->when($filters['end_date'] ?? null, fn(Builder $q, $end) => $q->whereDate('created_at', '<=', $end));

        $perPage = $filters['per_page'] ?? 10;
        $page = $filters['page'] ?? 1;

        return $query->orderBy('delivered_at', 'desc')
            ->paginate($perPage, ['*'], 'page', $page);
    }
}
