import { API_BASE_URL } from '../../app.js'
import { buildParams } from '../utils/params-utils.js'

export async function fetchDriversFromAPI(page, filters) {
    const params = buildParams(page, filters)

    const response = await fetch(`${API_BASE_URL}/drivers?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    })

    if (!response.ok) {
        throw new Error('Erro ao carregar motoristas.')
    }

    return response.json()
}

export async function fetchDriverOrdersFromAPI(driverId, page, filters) {
    const params = buildParams(page, filters)

    const response = await fetch(`${API_BASE_URL}/orders/${driverId}?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    })

    if (!response.ok) {
        throw new Error('Erro ao carregar pedidos do motorista.')
    }

    return response.json()
}

export async function updateOrderOnAPI(orderId, payload) {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(payload),
    })

    if (!response.ok) {
        const errorPayload = await response.json().catch(() => null)
        const errorMessage = errorPayload?.message || 'Erro ao salvar alterações do pedido.'
        throw new Error(errorMessage)
    }

    return response.json()
}
