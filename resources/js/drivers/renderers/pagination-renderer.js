import { getPageFromUrl, formatPaginationLabel } from '../utils/url-utils.js'

export function renderPagination(paginationContainer, links, onPageClick) {
    paginationContainer.innerHTML = ''

    if (!links || links.length === 0) {
        return
    }

    links.forEach(function (link) {
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
                    onPageClick(page)
                }
            })
        }

        pageItem.appendChild(pageLink)
        paginationContainer.appendChild(pageItem)
    })
}

export function renderPaginationInfo(paginationInfoContainer, result) {
    const from = result.from ?? 0
    const to = result.to ?? 0
    const total = result.total ?? 0

    paginationInfoContainer.textContent = `${from}-${to} de ${total}`
}
