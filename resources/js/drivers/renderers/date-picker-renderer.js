import { getPortugueseLocale } from '../utils/date-utils.js'

export function initDateRangePicker($datePeriodElement, onApply, onCancel) {
    $datePeriodElement.daterangepicker({
        showDropdowns: true,
        linkedCalendars: false,
        autoApply: false,
        autoUpdateInput: false,
        opens: 'right',
        drops: 'down',
        locale: getPortugueseLocale(),
    })

    $datePeriodElement.on('show.daterangepicker', function (ev, picker) {
        const applyButton = $(picker.container).find('.applyBtn')
        const cancelButton = $(picker.container).find('.cancelBtn')

        applyButton.removeClass('btn-primary').addClass('btn-link')
        cancelButton.removeClass('btn-default btn-sm').addClass('btn btn-link')
    })

    $datePeriodElement.on('apply.daterangepicker', function (event, picker) {
        const startDate = picker.startDate.format('DD/MM/YYYY')
        const endDate = picker.endDate.format('DD/MM/YYYY')

        this.value = `${startDate} - ${endDate}`

        if (onApply) {
            onApply()
        }
    })

    $datePeriodElement.on('cancel.daterangepicker', function () {
        this.value = ''

        if (onCancel) {
            onCancel()
        }
    })
}
