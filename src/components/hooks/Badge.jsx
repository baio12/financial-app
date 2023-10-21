import React from 'react';
import PropTypes from 'prop-types'

function Badge({ text }) {
    const colorBadge = {
        'completed': 'bg-green-200/90 text-green-600',
        'developing': 'bg-gray-200 text-gray-600',
        'ready': 'bg-blue-200 text-gray-900'
    }
    const translateStatus = {
        'completed': 'Completado',
        'developing': 'En desarrollo',
        'ready': 'Listo para desarrollar'
    }

    return (
        <span className={`inline-flex justify-center items-center rounded-full ${colorBadge[text?.toLowerCase()] === undefined ? 'bg-blue-50 text-blue-text' : colorBadge[text?.toLowerCase()]} px-3 py-1 text-sm font-semibold min-w-[60px] text-center`}>
            {translateStatus[text?.toLowerCase()] || text}
        </span>
    )
}

Badge.propTypes = {
    text: PropTypes.string
}

export default Badge