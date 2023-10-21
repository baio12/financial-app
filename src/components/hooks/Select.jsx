import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Transition, Listbox } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Select({ value, setValue, listOptions, label, labelDescription, isDisabled, needed, error, modal, setOpenModal, setModalInfo, ...rest }) {
    const updateModal = () => {
        setOpenModal(true);
        setModalInfo({title: label, description: labelDescription});
    }
    return (
        <>
            <div>
                <Listbox value={value} onChange={setValue} disabled={isDisabled} {...rest}>
                    {({ open }) => (
                        <>
                            <Listbox.Label className="flex items-center text-sm font-medium text-gray-700 dark:text-white">{label} {needed && <span className='text-red-400 ml-1'>*</span>}{modal && <QuestionMarkCircleIcon  className='w-5 h-5 ml-1 dark:text-white text-gray-900 cursor-pointer' onClick={ updateModal }/>} </Listbox.Label>
                            <div className="mt-1 relative">
                                <Listbox.Button className={`bg-white relative ${isDisabled ? 'opacity-50 cursor-not-allowed' : error != null ? 'opacity-100 border-red-300 placeholder-red-300' : 'opacity-100 border-gray-300 placeholder:text-gray-300'} w-full border rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer outline-none focus:ring-0 sm:text-sm`}>
                                    {!value || value === '' ?
                                        <p className='text-gray-400 text-sm'>Selecciona una opción</p>
                                        :
                                        <span className="block truncate text-gray-900">{value}</span>
                                    }
                                    {!isDisabled && <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>}
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute overflow-auto z-[10] mt-1 w-full bg-white shadow-lg max-h-48 rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none text-base">
                                        {listOptions && listOptions.map((item, i) => (
                                            <Listbox.Option
                                                key={i}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'font-bold bg-gray-50 text-gray-900' : 'text-gray-900',
                                                        'cursor-pointer select-none hover:bg-gray-50 relative py-2.5 pl-3 pr-9 rounded-md'
                                                    )
                                                }
                                                value={item.name}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span className={`${selected && !active && 'text-gray-900'} block font-normal`}>
                                                            {item.name}
                                                        </span>

                                                        {selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-gray-700' : 'text-gray-700',
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
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
        </>
    )
}

Select.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
    listOptions: PropTypes.array,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    needed: PropTypes.bool,
    error: PropTypes.string
}

Select.defaultValue = {
    needed: true
}

export default Select