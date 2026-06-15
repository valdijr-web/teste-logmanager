export function renderOrdersTable(tableBody, orders, columns = { showStatus: true, showDeliveredDate: false }) {
    tableBody.innerHTML = ''

    const showStatus = columns.showStatus
    const showDeliveredDate = columns.showDeliveredDate

    if (!orders || orders.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="3" class="text-muted text-center">
                    Nenhum pedido encontrado.
                </td>
            </tr>
        `
        return
    }

    orders.forEach(function (order) {
        const row = document.createElement('tr')

        const codeCell = document.createElement('td')
        codeCell.textContent = order.code

        const addressCell = document.createElement('td')
        addressCell.textContent = order.delivery_address

        row.appendChild(codeCell)
        row.appendChild(addressCell)

        if (showStatus) {
            const statusCell = document.createElement('td')
            statusCell.textContent = order.status
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

export function renderLoading(tableBody) {
    tableBody.innerHTML = `
        <tr>
            <td colspan="3" class="text-muted text-center">
                Carregando...
            </td>
        </tr>
    `
}

export function renderError(tableBody, message) {
    tableBody.innerHTML = `
        <tr>
            <td colspan="3" class="text-danger text-center">
                ${message}
            </td>
        </tr>
    `
}
