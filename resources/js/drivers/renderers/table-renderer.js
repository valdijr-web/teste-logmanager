export function renderTable(tableBody, drivers) {
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

        const nameCell = document.createElement('td')
        nameCell.textContent = driver.name

        const ordersCell = document.createElement('td')
        ordersCell.appendChild(createLink(driver, 'orders', driver.orders_count))

        const deliveredCell = document.createElement('td')
        deliveredCell.appendChild(createLink(driver, 'delivered', driver.delivered_orders_count))

        row.appendChild(nameCell)
        row.appendChild(ordersCell)
        row.appendChild(deliveredCell)
        tableBody.appendChild(row)
    })
}

function createLink(driver, orderType, text) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'btn btn-link p-0 js-driver-orders-link'
    button.dataset.driverId = driver.id
    button.dataset.driverName = driver.name
    button.dataset.orderType = orderType
    button.textContent = text

    return button
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
