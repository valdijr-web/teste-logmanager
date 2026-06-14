export function parseDatePeriod(datePeriod) {
    if (!datePeriod) {
        return {
            startDate: null,
            endDate: null,
        }
    }

    const parts = datePeriod.split('-')

    if (parts.length !== 2) {
        return {
            startDate: null,
            endDate: null,
        }
    }

    return {
        startDate: formatDateToApi(parts[0].trim()),
        endDate: formatDateToApi(parts[1].trim()),
    }
}

export function formatDateToApi(date) {
    const parts = date.split('/')

    if (parts.length !== 3) {
        return null
    }

    const day = parts[0]
    const month = parts[1]
    const year = parts[2]

    return `${year}-${month}-${day}`
}

export function getPortugueseLocale() {
    return {
        format: 'DD/MM/YYYY',
        separator: ' - ',
        applyLabel: 'Aplicar',
        cancelLabel: 'Cancelar',
        customRangeLabel: 'Personalizado',
        weekLabel: 'S',
        daysOfWeek: [
            'Dom',
            'Seg',
            'Ter',
            'Qua',
            'Qui',
            'Sex',
            'Sáb',
        ],
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ],
        firstDay: 0,
    }
}
