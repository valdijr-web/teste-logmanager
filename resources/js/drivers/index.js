// Elementos HTML
import { API_BASE_URL } from '../app.js';

document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('driversTableBody')
    const pagination = document.getElementById('driversPagination')
    const paginationInfo = document.getElementById('driversPaginationInfo')

    const statusSelect = document.getElementById('status')
    const datePeriodInput = document.getElementById('date_period')
    const perPageSelect = document.getElementById('perPage')
    const refreshButton = document.getElementById('refreshDriversButton')

    let currentPage = 1

    async function fetchDrivers(page = 1) {
        currentPage = page

        renderLoading()

        const params = buildParams(page)

        try {
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

            const result = await response.json()

            renderTable(result.data)
            renderPagination(result)
            renderPaginationInfo(result)
        } catch (error) {
            renderError(error.message)
        }
    }

    function buildParams(page) {
        const params = new URLSearchParams()

        const status = statusSelect.value
        const perPage = perPageSelect.value
        const datePeriod = datePeriodInput.value
        console.log("TESTE ", datePeriodInput.value)

        params.append('page', page)
        params.append('per_page', perPage)

        if (status && status !== 'all') {
            params.append('status', status)
        }

        const dates = parseDatePeriod(datePeriod)
        console.log(dates);
        if (dates.startDate) {
            params.append('start_date', dates.startDate)
        }

        if (dates.endDate) {
            params.append('end_date', dates.endDate)
        }

        return params
    }

    function parseDatePeriod(datePeriod) {
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

    function formatDateToApi(date) {
        const parts = date.split('/')

        if (parts.length !== 3) {
            return null
        }

        const day = parts[0]
        const month = parts[1]
        const year = parts[2]

        return `${year}-${month}-${day}`
    }

    function renderTable(drivers) {
        tableBody.innerHTML = ''

        if (!drivers || drivers.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="3" class="text-muted text-center">
                        Nenhum registro encontrado.
                    </td>
                </tr>
            `

            return
        }

        drivers.forEach(function (driver) {
            const row = document.createElement('tr')

            if (driver.row_color) {
                row.classList.add(driver.row_color)
            }

            row.innerHTML = `
                <td>${driver.name}</td>
                <td>${driver.orders_count}</td>
                <td>${driver.delivered_orders_count}</td>
            `

            tableBody.appendChild(row)
        })
    }

    function renderPagination(result) {
        pagination.innerHTML = ''

        if (!result.links || result.links.length === 0) {
            return
        }

        result.links.forEach(function (link) {
            const pageItem = document.createElement('li')
            pageItem.classList.add('page-item')

            if (link.active) {
                pageItem.classList.add('active')
            }

            if (!link.url) {
                pageItem.classList.add('disabled')
            }

            const pageLink = document.createElement('button')
            pageLink.type = 'button'
            pageLink.classList.add('page-link')
            pageLink.innerHTML = formatPaginationLabel(link.label)

            if (link.url) {
                pageLink.addEventListener('click', function () {
                    const page = getPageFromUrl(link.url)

                    if (page) {
                        fetchDrivers(page)
                    }
                })
            }

            pageItem.appendChild(pageLink)
            pagination.appendChild(pageItem)
        })
    }

    function renderPaginationInfo(result) {
        const from = result.from ?? 0
        const to = result.to ?? 0
        const total = result.total ?? 0

        paginationInfo.textContent = `${from}-${to} de ${total}`
    }

    function renderLoading() {
        tableBody.innerHTML = `
            <tr>
                <td colspan="3" class="text-muted text-center">
                    Carregando...
                </td>
            </tr>
        `
    }

    function renderError(message) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="3" class="text-danger text-center">
                    ${message}
                </td>
            </tr>
        `
    }

    function getPageFromUrl(url) {
        const urlObject = new URL(url)
        return urlObject.searchParams.get('page')
    }

    function formatPaginationLabel(label) {
        if (label.includes('Previous')) {
            return '&lsaquo;'
        }

        if (label.includes('Next')) {
            return '&rsaquo;'
        }

        return label
    }

    refreshButton.addEventListener('click', function () {
        fetchDrivers(1)
    })

    statusSelect.addEventListener('change', function () {
        fetchDrivers(1)
    })

    perPageSelect.addEventListener('change', function () {
        fetchDrivers(1)
    })

    fetchDrivers()
})



