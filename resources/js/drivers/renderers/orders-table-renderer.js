export function renderOrdersTable(tableBody, orders) {
    tableBody.innerHTML = ''

    if (!orders || orders.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" class="text-muted text-center">
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

        const statusCell = document.createElement('td')
        statusCell.textContent = order.status

        row.appendChild(codeCell)
        row.appendChild(addressCell)
        row.appendChild(statusCell)

        tableBody.appendChild(row)
    })
}

export function renderLoading(tableBody) {
    tableBody.innerHTML = `
        <tr>
            <td colspan="4" class="text-muted text-center">
                Carregando...
            </td>
        </tr>
    `
}

export function renderError(tableBody, message) {
    tableBody.innerHTML = `
        <tr>
            <td colspan="4" class="text-danger text-center">
                ${message}
            </td>
        </tr>
    `
}
