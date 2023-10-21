import React from 'react'
import PropTypes from 'prop-types';

function Bubble({ color, text, size }) {

    const bubbleColor = {
        'default': 'text-gray-600 border-gray-600',
        'blue': 'text-blue-600 border-blue-600',
        'orange': 'text-orange-600 border-orange-600',
        'purple': 'text-purple-600 border-purple-600',
        'yellow': 'text-yellow-600 border-yellow-600',
        'green': 'text-green-600 border-green-600',
        'pink': 'text-pink-600 border-pink-600',
        'sky': 'text-sky-600 border-sky-600',
    }

    const bubbleSize = {
        'sm': 'w-20 h-20',
        'md': 'w-24 h-24',
        'lg': 'w-32 h-32'
    }

    return (
        <div className={`${bubbleSize[size]} border-2 ${bubbleColor[color]} font-bold text-base lg:text-[19px] p-1 rounded-full flex justify-center items-center text-center min-w-[40px] animate-bounce-circle hover:bg-white/10`}>
            { text }
        </div>
    )
}

Bubble.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    size: PropTypes.string
}

Bubble.defaultProps = {
    color: 'default',
    text: 'Texto',
    size: 'md'
}

export default Bubble