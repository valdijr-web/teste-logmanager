const ORDER_STATUS_OPTIONS = [
    { value: 'Pendente', label: 'Pendente' },
    { value: 'Entregue', label: 'Entregue' },
]

export function renderOrdersTable(tableBody, orders, columns = { showStatus: true, showDeliveredDate: false }, editOrder = null) {
    tableBody.innerHTML = ''

    const showStatus = columns.showStatus
    const showDeliveredDate = columns.showDeliveredDate
    const columnCount = 2 + (showStatus ? 1 : 0) + (showDeliveredDate ? 1 : 0)

    if (!orders || orders.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="${columnCount}" class="text-muted text-center">
                    Nenhum pedido encontrado.
                </td>
            </tr>
        `
        return
    }

    orders.forEach(function (order) {
        const row = document.createElement('tr')
        const isEditing = editOrder && Number(editOrder.id) === Number(order.id)

        const codeCell = document.createElement('td')
        codeCell.textContent = order.code
        row.appendChild(codeCell)

        const addressCell = document.createElement('td')
        const isEditingAddress = isEditing && editOrder?.editAddress

        if (isEditingAddress) {
            const input = document.createElement('input')
            input.type = 'text'
            input.className = 'form-control form-control js-order-address-input'
            input.dataset.orderId = order.id
            input.value = editOrder.delivery_address || order.delivery_address
            addressCell.appendChild(input)
        } else {
            const addressText = document.createElement('span')
            addressText.textContent = order.delivery_address
            addressText.className = 'me-2'

            const editButton = document.createElement('button')
            editButton.type = 'button'
            editButton.className = 'btn btn-link btn-sm p-0 align-baseline js-order-edit-button'
            editButton.dataset.orderId = order.id
            editButton.title = 'Editar endereço'
            editButton.innerHTML = `
                <img src="/assets/img/icons/edit-3.svg" width="16" height="16" alt="Editar" />
            `

            addressCell.appendChild(addressText)
            addressCell.appendChild(editButton)
        }

        row.appendChild(addressCell)

        if (showStatus) {
            const statusCell = document.createElement('td')
            const isEditingStatus = isEditing && editOrder?.editStatus

            if (isEditingStatus) {
                const statusSelect = document.createElement('select')
                statusSelect.className = 'form-select form-select js-order-status-select'
                statusSelect.dataset.orderId = order.id

                ORDER_STATUS_OPTIONS.forEach((statusOption) => {
                    const option = document.createElement('option')
                    option.value = statusOption.value
                    option.textContent = statusOption.label
                    option.selected = (editOrder?.status || order.status) === statusOption.value
                    statusSelect.appendChild(option)
                })

                statusCell.appendChild(statusSelect)
            } else {
                const statusText = document.createElement('span')
                statusText.textContent = order.status
                statusText.className = 'me-2'

                const statusToggle = document.createElement('button')
                statusToggle.type = 'button'
                statusToggle.className = 'btn btn-link btn-sm p-0 align-baseline js-order-status-toggle'
                statusToggle.dataset.orderId = order.id
                statusToggle.title = 'Editar status'
                statusToggle.innerHTML = `
                    <svg width="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M15 8l-4.03 6L7 8h8z" fill="currentColor"/></svg>
                `

                statusCell.appendChild(statusText)
                statusCell.appendChild(statusToggle)
            }

            row.appendChild(statusCell)
        }

        if (showDeliveredDate) {
            const deliveredAtCell = document.createElement('td')
            deliveredAtCell.textContent = order.delivered_at ? new Date(order.delivered_at).toLocaleString('pt-BR') : '-'
            row.appendChild(deliveredAtCell)
        }

        tableBody.appendChild(row)
    })
}

export function renderLoading(tableBody, columnCount = 3) {
    tableBody.innerHTML = `
        <tr>
            <td colspan="${columnCount}" class="text-muted text-center">
                Carregando...
            </td>
        </tr>
    `
}

export function renderError(tableBody, message, columnCount = 3) {
    tableBody.innerHTML = `
        <tr>
            <td colspan="${columnCount}" class="text-danger text-center">
                ${message}
            </td>
        </tr>
    `
}
