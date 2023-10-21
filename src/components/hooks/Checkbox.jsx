import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ checked, setChecked, checkError, message }) {
    return (
        <div className="flex h-5 items-start gap-3 lg:gap-2 mb-2">
            <input
                type="checkbox"
                checked={ checked }
                onChange={ () => setChecked(!checked) }
                className={`w-[24px] h-[24px] min-w-[24px] min-h-[24px] -mt-0.5 lg:mt-0 text-xl rounded bg-white border border-gray-300 text-blue-500 cursor-pointer ${checkError && 'border border-red-600 appearance-none'}`}
            />
            <span className='text-gray-900 dark:text-white text-sm text-body'>
                {message}
            </span>
        </div>
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    setChecked: PropTypes.func,
    checkError: PropTypes.bool,
    message: PropTypes.string
}

export default Checkbox