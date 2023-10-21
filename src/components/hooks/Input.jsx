import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from '@headlessui/react';
import Tooltip from './Tooltip';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

function Input({ label, labelDescription, needed, info, leftIcon, type, name, id, placeholder, rightIcon, rightIconAction, error, disabledInput, modal, setOpenModal, setModalInfo, ...rest }) {
    const updateModal = () => {
        setOpenModal(true);
        setModalInfo({title: label, description: labelDescription});
    }
    return (
        <div>
            {label && (
                <label htmlFor={id} className="flex items-center gap-0.5 text-sm font-medium text-gray-700 dark:text-white">
                    {label}
                    {needed && <span className='text-red-400 pl-1'>*</span>}
                    {info &&
                        <span className='inline-block ml-2 -mb-1'>
                            <Tooltip title={info} />
                        </span>
                    }
                    {modal &&
                        <span className='block'>
                            <QuestionMarkCircleIcon  className='w-5 h-5 ml-1 dark:text-white text-gray-900 cursor-pointer' onClick={ updateModal }/>
                        </span>
                    }
                </label>
            )}
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    type={type}
                    name={name}
                    id={id}
                    className={`${error ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'border-gray-300 text-gray-800 placeholder:text-gray-300 focus:ring-blue-sky focus:border-blue-sky'} placeholder:text-gray-400 placeholder:text-sm transition-all ${disabledInput && 'opacity-80 bg-gray-200 cursor-not-allowed'} block w-full ${leftIcon ? 'pl-10' : 'pl-4'} ${rightIcon ? 'pr-10' : 'pr-4'} text-base rounded-md block py-2.5 md:py-2 leading-none`}
                    placeholder={placeholder}
                    readOnly={disabledInput}
                    disabled={disabledInput}
                    {...rest}
                />
            </div>
            <Transition
                show={error != null}
                enter="transition-all ease-in"
                enterFrom="max-h-0 opacity-0"
                enterTo="max-h-[3rem] opacity-100"
                leave="transition-all ease-out"
                leaveFrom="max-h-[3rem] opacity-100"
                leaveTo="max-h-0 opacity-0">
                <span className='text-sm text-red-600'>{error}</span>
            </Transition>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    labelDescription: PropTypes.string,
    needed: PropTypes.bool,
    info: PropTypes.string,
    leftIcon: PropTypes.element,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    rightIcon: PropTypes.element,
    rightIconAction: PropTypes.func,
    error: PropTypes.string,
    disabledInput: PropTypes.bool
}

Input.defaultProps = {
    needed: false,
    type: 'text',
    disabledInput: false
}

export default Input;