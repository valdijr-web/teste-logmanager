<?php

namespace App\Actions\Drivers;

use App\Models\Driver;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;

class GetDriversAction
{
    public function execute(array $filters = []): LengthAwarePaginator
    {
        $query = Driver::query()
            ->select('id', 'name');

        $query->withCount([
            'orders' => function (Builder $q) use ($filters) {
                $q->when($filters['start_date'] ?? null, fn($subQ, $start) => $subQ->whereDate('created_at', '>=', $start))
                    ->when($filters['end_date'] ?? null, fn($subQ, $end) => $subQ->whereDate('created_at', '<=', $end));
            },
            'orders as delivered_orders_count' => function (Builder $q) use ($filters) {
                $q->where('status', 'Entregue')
                    ->whereNotNull('delivered_at')
                    ->when($filters['start_date'] ?? null, fn($subQ, $start) => $subQ->whereDate('created_at', '>=', $start))
                    ->when($filters['end_date'] ?? null, fn($subQ, $end) => $subQ->whereDate('created_at', '<=', $end));
            }
        ]);

        $query->when($filters['status'] ?? null, function (Builder $q, $status) {
            switch ($status) {
                case 'completed':
                    $q->havingRaw("orders_count > 0 AND orders_count = delivered_orders_count");
                    break;
                case 'almost_done':
                    $q->havingRaw("orders_count > 0 AND (delivered_orders_count * 2) > orders_count AND delivered_orders_count < orders_count");
                    break;
                case 'alert':
                    $q->havingRaw("orders_count > 0 AND (delivered_orders_count * 2) <= orders_count");
                    break;
                case 'all':
                default:
                    break;
            }
        });

        $sortBy = $filters['sort_by'] ?? 'name';
        $sortDirection = $filters['sort_direction'] ?? 'asc';
        $query->orderBy($sortBy, $sortDirection);

        $perPage = $filters['per_page'] ?? 10;
        $page = $filters['page'] ?? 1;

        $paginator = $query->paginate($perPage, ['*'], 'page', $page);

        return $paginator->through(function ($driver) {
            $total = (int) $driver->orders_count;
            $delivered = (int) $driver->delivered_orders_count;

            if ($total > 0 && $total === $delivered) {
                $driver->row_color = 'table-success';
            } elseif ($total > 0 && ($delivered * 2) > $total && $delivered < $total) {
                $driver->row_color = 'table-warning';
            } elseif ($total > 0 && ($delivered * 2) <= $total) {
                $driver->row_color = 'table-danger';
            } else {
                $driver->row_color = 'table-light';
            }

            return $driver;
        });
    }
}
