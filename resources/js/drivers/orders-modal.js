import { fetchDriverOrdersFromAPI } from './api/drivers-api.js'
import { renderOrdersTable, renderLoading, renderError } from './renderers/orders-table-renderer.js'
import { renderPagination, renderPaginationInfo } from './renderers/pagination-renderer.js'

const ordersModal = document.getElementById('driverOrdersModal')
const ordersModalTitle = document.getElementById('driverOrdersModalTitle')
const ordersTableBody = document.getElementById('driverOrdersTableBody')
const ordersPagination = document.getElementById('driverOrdersPagination')
const ordersPaginationInfo = document.getElementById('driverOrdersPaginationInfo')
const ordersPerPageSelect = document.getElementById('driverOrdersPerPage')

let currentDriverId = null
let currentOrderType = 'orders'
let currentFilters = {}
let currentPage = 1

export function initDriverOrdersModal() {
    if (!ordersModal) {
        return
    }

    ordersPerPageSelect.addEventListener('change', () => fetchOrders(1))

    ordersModal.addEventListener('show.bs.modal', () => {
        if (currentDriverId) {
            fetchOrders(1)
        }
    })


}

export function openDriverOrdersModal(driverId, driverName, orderType, filters = {}) {
    currentDriverId = driverId
    currentOrderType = orderType
    currentFilters = filters
    currentPage = 1

    ordersModalTitle.textContent = orderType === 'delivered'
        ? `Entregas de ${driverName}`
        : `Pedidos de ${driverName}`

    const modal = new bootstrap.Modal(ordersModal)
    modal.show()
}

async function fetchOrders(page = 1) {
    if (!currentDriverId) {
        return
    }

    currentPage = page
    renderLoading(ordersTableBody)

    try {
        const result = await fetchDriverOrdersFromAPI(currentDriverId, page, {
            status: currentOrderType === 'delivered' ? 'delivered' : 'all',
            perPage: ordersPerPageSelect.value,
            datePeriod: currentFilters.datePeriod,
        })

        renderOrdersTable(ordersTableBody, result.data)
        renderPagination(ordersPagination, result.links, fetchOrders)
        renderPaginationInfo(ordersPaginationInfo, result)
    } catch (error) {
        renderError(ordersTableBody, error.message)
    }
}
