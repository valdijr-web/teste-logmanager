import { fetchDriverOrdersFromAPI } from './api/drivers-api.js'
import { renderOrdersTable, renderLoading, renderError } from './renderers/orders-table-renderer.js'
import { renderPagination, renderPaginationInfo } from './renderers/pagination-renderer.js'

const ordersModal = document.getElementById('driverOrdersModal')
const ordersModalTitle = document.getElementById('driverOrdersModalTitle')
const ordersTableHead = document.getElementById('driverOrdersTableHead')
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

    const isDeliveryMode = orderType === 'delivered'
    const columns = {
        showStatus: !isDeliveryMode,
        showDeliveredDate: isDeliveryMode,
    }

    ordersModalTitle.textContent = isDeliveryMode
        ? `Entregas de ${driverName}`
        : `Pedidos de ${driverName}`

    setOrdersTableHeader(columns)

    const modal = new bootstrap.Modal(ordersModal)
    modal.show()
}

function setOrdersTableHeader(columns) {
    if (!ordersTableHead) {
        return
    }

    ordersTableHead.innerHTML = `
        <th scope="col">Código</th>
        <th scope="col">Endereço</th>
        ${columns.showStatus ? '<th scope="col">Status</th>' : ''}
        ${columns.showDeliveredDate ? '<th scope="col">Entregue em</th>' : ''}
    `
}

async function fetchOrders(page = 1) {
    if (!currentDriverId) {
        return
    }

    currentPage = page
    const isDeliveryMode = currentOrderType === 'delivered'
    const columns = {
        showStatus: !isDeliveryMode,
        showDeliveredDate: isDeliveryMode,
    }

    renderLoading(ordersTableBody)

    try {
        const result = await fetchDriverOrdersFromAPI(currentDriverId, page, {
            status: isDeliveryMode ? 'delivered' : 'all',
            perPage: ordersPerPageSelect.value,
            datePeriod: currentFilters.datePeriod,
        })

        renderOrdersTable(ordersTableBody, result.data, columns)
        renderPagination(ordersPagination, result.links, fetchOrders)
        renderPaginationInfo(ordersPaginationInfo, result)
    } catch (error) {
        renderError(ordersTableBody, error.message)
    }
}
