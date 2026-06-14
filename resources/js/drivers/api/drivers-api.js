import { API_BASE_URL } from '../../app.js'
import { parseDatePeriod } from '../utils/date-utils.js'

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

function buildParams(page, filters) {
    const params = new URLSearchParams()

    params.append('page', page)
    params.append('per_page', filters.perPage)

    if (filters.status && filters.status !== 'all') {
        params.append('status', filters.status)
    }

    const dates = parseDatePeriod(filters.datePeriod)
    if (dates.startDate) {
        params.append('start_date', dates.startDate)
    }

    if (dates.endDate) {
        params.append('end_date', dates.endDate)
    }

    return params
}
