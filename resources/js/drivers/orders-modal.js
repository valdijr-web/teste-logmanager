import { fetchDriverOrdersFromAPI, updateOrderOnAPI } from './api/drivers-api.js'
import { renderOrdersTable, renderLoading, renderError } from './renderers/orders-table-renderer.js'
import { renderPagination, renderPaginationInfo } from './renderers/pagination-renderer.js'

const ordersModal = document.getElementById('driverOrdersModal')
const ordersModalTitle = document.getElementById('driverOrdersModalTitle')
const ordersTableHead = document.getElementById('driverOrdersTableHead')
const ordersTableBody = document.getElementById('driverOrdersTableBody')
const ordersPagination = document.getElementById('driverOrdersPagination')
const ordersPaginationInfo = document.getElementById('driverOrdersPaginationInfo')
const ordersPerPageSelect = document.getElementById('driverOrdersPerPage')
const ordersModalFooter = ordersModal?.querySelector('.modal-footer')

let currentDriverId = null
let currentOrderType = 'orders'
let currentFilters = {}
let currentPage = 1
let currentOrders = []
let currentEditOrder = null
const ORDERS_TABLE_COLUMN_COUNT = 3

export function initDriverOrdersModal() {
    if (!ordersModal) {
        return
    }

    ordersPerPageSelect.addEventListener('change', () => fetchOrders(1))
    ordersTableBody.addEventListener('click', handleOrdersTableClick)
    ordersTableBody.addEventListener('input', handleOrdersTableInput)
    ordersTableBody.addEventListener('change', handleOrdersTableChange)
    ordersModal.addEventListener('click', handleModalFooterClick)

    ordersModal.addEventListener('show.bs.modal', () => {
        if (currentDriverId) {
            fetchOrders(1)
        }
    })

    ordersModal.addEventListener('hidden.bs.modal', () => {
        currentEditOrder = null
        renderModalFooter()
    })
}

export function openDriverOrdersModal(driverId, driverName, orderType, filters = {}) {
    currentDriverId = driverId
    currentOrderType = orderType
    currentFilters = filters
    currentPage = 1
    currentOrders = []
    currentEditOrder = null

    const isDeliveryMode = orderType === 'delivered'
    const columns = {
        showStatus: !isDeliveryMode,
        showDeliveredDate: isDeliveryMode,
    }

    ordersModalTitle.textContent = isDeliveryMode
        ? `Entregas de ${driverName}`
        : `Pedidos de ${driverName}`

    setOrdersTableHeader(columns)
    renderModalFooter()

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

function handleOrdersTableClick(event) {
    const editButton = event.target.closest('.js-order-edit-button')
    const statusToggle = event.target.closest('.js-order-status-toggle')

    if (editButton) {
        event.preventDefault()
        startOrderEdit(editButton.dataset.orderId, { editAddress: true, editStatus: false })
        return
    }

    if (statusToggle) {
        event.preventDefault()
        startOrderEdit(statusToggle.dataset.orderId, { editAddress: false, editStatus: true })
    }
}

function handleModalFooterClick(event) {
    const saveButton = event.target.closest('.js-order-save-button')
    const cancelButton = event.target.closest('.js-order-cancel-button')

    if (saveButton) {
        event.preventDefault()
        saveOrderChanges()
        return
    }

    if (cancelButton) {
        event.preventDefault()
        cancelOrderEdit()
    }
}

function handleOrdersTableInput(event) {
    const input = event.target.closest('.js-order-address-input')

    if (!input || !currentEditOrder) {
        return
    }

    currentEditOrder.delivery_address = input.value
}

function handleOrdersTableChange(event) {
    const select = event.target.closest('.js-order-status-select')

    if (!select || !currentEditOrder) {
        return
    }

    currentEditOrder.status = select.value
}

function startOrderEdit(orderId, editOptions = { editAddress: true, editStatus: false }) {
    const order = currentOrders.find((item) => String(item.id) === String(orderId))

    if (!order) {
        return
    }

    currentEditOrder = {
        id: order.id,
        delivery_address: order.delivery_address,
        status: order.status,
        editAddress: Boolean(editOptions.editAddress),
        editStatus: Boolean(editOptions.editStatus),
    }

    renderOrdersTable(ordersTableBody, currentOrders, getColumns(), currentEditOrder)
    renderModalFooter()
}

function cancelOrderEdit() {
    currentEditOrder = null
    renderOrdersTable(ordersTableBody, currentOrders, getColumns(), null)
    renderModalFooter()
}

async function saveOrderChanges() {
    if (!currentEditOrder) {
        return
    }

    if (!currentEditOrder.delivery_address || !currentEditOrder.delivery_address.trim()) {
        return
    }

    try {
        await updateOrderOnAPI(currentEditOrder.id, {
            delivery_address: currentEditOrder.delivery_address,
            status: currentEditOrder.status,
        })

        currentEditOrder = null
        await fetchOrders(currentPage)
    } catch (error) {
        renderError(ordersTableBody, error.message, ORDERS_TABLE_COLUMN_COUNT)
    }
}

function renderModalFooter() {
    if (!ordersModalFooter) {
        return
    }

    if (!currentEditOrder) {
        ordersModalFooter.innerHTML = ''
        return
    }

    ordersModalFooter.innerHTML = `
        <div class="d-flex justify-content-between align-items-center w-100">
            <button type="button" class="btn btn-light js-order-cancel-button border">
                Cancelar
            </button>
            <button type="button" class="btn btn-primary js-order-save-button">
                Salvar Alterações
            </button>
        </div>
    `
}

function getColumns() {
    const isDeliveryMode = currentOrderType === 'delivered'

    return {
        showStatus: !isDeliveryMode,
        showDeliveredDate: isDeliveryMode,
    }
}

async function fetchOrders(page = 1) {
    if (!currentDriverId) {
        return
    }

    currentPage = page
    const columns = getColumns()

    renderLoading(ordersTableBody, ORDERS_TABLE_COLUMN_COUNT)

    try {
        const result = await fetchDriverOrdersFromAPI(currentDriverId, page, {
            status: currentOrderType === 'delivered' ? 'delivered' : 'all',
            perPage: ordersPerPageSelect.value,
            datePeriod: currentFilters.datePeriod,
        })

        currentOrders = result.data || []
        currentEditOrder = currentEditOrder && currentOrders.some((item) => item.id === currentEditOrder.id)
            ? currentEditOrder
            : null

        renderOrdersTable(ordersTableBody, currentOrders, columns, currentEditOrder)
        renderPagination(ordersPagination, result.links, fetchOrders)
        renderPaginationInfo(ordersPaginationInfo, result)
        renderModalFooter()
    } catch (error) {
        renderError(ordersTableBody, error.message, ORDERS_TABLE_COLUMN_COUNT)
    }
}
