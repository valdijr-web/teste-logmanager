import { fetchDriversFromAPI } from './api/drivers-api.js'
import { renderTable, renderLoading, renderError } from './renderers/table-renderer.js'
import { renderPagination, renderPaginationInfo } from './renderers/pagination-renderer.js'
import { initDateRangePicker } from './renderers/date-picker-renderer.js'

document.addEventListener('DOMContentLoaded', function () {
    const elements = {
        tableBody: document.getElementById('driversTableBody'),
        pagination: document.getElementById('driversPagination'),
        paginationInfo: document.getElementById('driversPaginationInfo'),
        statusSelect: document.getElementById('status'),
        datePeriodInput: document.getElementById('date_period'),
        perPageSelect: document.getElementById('perPage'),
        refreshButton: document.getElementById('refreshDriversButton'),
    }

    let currentPage = 1

    initDateRangePicker(
        $('#date_period'),
        () => handleFetchDrivers(1),
        () => handleFetchDrivers(1)
    )

    elements.refreshButton.addEventListener('click', () => handleFetchDrivers(1))
    elements.statusSelect.addEventListener('change', () => handleFetchDrivers(1))
    elements.perPageSelect.addEventListener('change', () => handleFetchDrivers(1))

    async function handleFetchDrivers(page = 1) {
        currentPage = page

        renderLoading(elements.tableBody)

        try {
            const filters = getFilters()
            const result = await fetchDriversFromAPI(page, filters)

            renderTable(elements.tableBody, result.data)
            renderPagination(elements.pagination, result.links, handleFetchDrivers)
            renderPaginationInfo(elements.paginationInfo, result)
        } catch (error) {
            renderError(elements.tableBody, error.message)
        }
    }

    function getFilters() {
        return {
            status: elements.statusSelect.value,
            perPage: elements.perPageSelect.value,
            datePeriod: elements.datePeriodInput.value,
        }
    }

    handleFetchDrivers()
})
