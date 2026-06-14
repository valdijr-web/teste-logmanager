/**
 * Extrai o número da página de uma URL
 * @param {string} url - URL completa com parâmetro page
 * @returns {string|null} Número da página ou null se não encontrado
 */
export function getPageFromUrl(url) {
    const urlObject = new URL(url)
    return urlObject.searchParams.get('page')
}

export function formatPaginationLabel(label) {
    if (label.includes('Previous')) {
        return '&lsaquo;'
    }

    if (label.includes('Next')) {
        return '&rsaquo;'
    }

    return label
}
