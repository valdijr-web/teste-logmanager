<?php

namespace App\Http\Requests;

use App\Models\Order;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateOrderRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'delivery_address' => ['required', 'string', 'max:255'],
            'status' => ['required', 'string', Rule::in([Order::STATUS_PENDING, Order::STATUS_DELIVERED])],
        ];
    }
}
