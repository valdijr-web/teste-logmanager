<?php

namespace App\Http\Controllers\Api\V1;

use App\Actions\Monitoring\GetDriversMonitoringAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DriverMonitoringController extends Controller
{
    public function index(Request $request, GetDriversMonitoringAction $action): JsonResponse
    {
        $drivers = $action->execute([
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
            'status' => $request->input('status', 'all'),
            'per_page' => $request->input('per_page', 10),
        ]);

        return response()->json($drivers);
    }
}
