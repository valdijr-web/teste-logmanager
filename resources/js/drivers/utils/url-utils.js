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
