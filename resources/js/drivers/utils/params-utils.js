import { parseDatePeriod } from '../utils/date-utils.js'

export function buildParams(page, filters) {
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
