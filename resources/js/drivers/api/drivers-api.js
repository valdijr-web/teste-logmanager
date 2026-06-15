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
