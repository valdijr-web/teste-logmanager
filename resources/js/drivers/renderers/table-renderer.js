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

        row.innerHTML = `
            <td>${driver.name}</td>
            <td>${driver.orders_count}</td>
            <td>${driver.delivered_orders_count}</td>
        `

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
