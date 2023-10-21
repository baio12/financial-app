import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

function Nav({ navigation }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="w-full dark:bg-black dark:shadow-lg dark:border-b dark:border-white bg-white shadow-sm lg:shadow-lg fixed z-50 top-0">
            <div className="px-4 lg:px-4 py-4 max-w-screen-lg mx-auto">
                <nav className="flex items-center justify-between">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                        <span>
                            <Image 
                                alt='baio logo'
                                src='/baio_logo.svg'
                                width={140}
                                height={70}
                                className='dark:invert invert-0 z-[999]'
                            />
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden dark:text-white text-gray-900 z-[100]">
                        <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        type="button"
                        className="bg-transparent inline-flex items-center justify-center rounded-md hover:bg-transparent"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!mobileMenuOpen ? (
                            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                <svg
                                className="block h-8 w-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            </div>
                        ) : (
                        <svg
                            className="block h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        )}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-6">
                    {navigation.map((item) => (
                    <Link key={item.name} href={item.href} legacyBehavior>
                        <a className="-mx-1 block rounded-lg py-2 px-3 text-base font-medium leading-7 dark:text-white text-gray-900 hover:bg-gray-400/20 ring:transparent outline-none">
                            {item.name}
                        </a>
                    </Link>
                    ))}
                </div>
                </nav>
                <Dialog as="div" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                    <Dialog.Panel className="fixed inset-0 top-12 overflow-y-auto dark:bg-black bg-white dark:text-white text-gray-900 px-4 py-4 lg:hidden">
                        <div className="mt-6 dark:text-white text-gray-900">
                            <div className="-my-6 ">
                                <div className="space-y-2 py-6" onClick={() => setMobileMenuOpen(false)}>
                                {navigation.map((item) => (
                                    <>
                                        { item.label !== undefined && 
                                            <span className='w-full px-2 block pt-8 dark:text-white text-gray-900 font-medium text-sm flex gap-2 items-center'>{item.label} <RocketLaunchIcon className='h-4 w-4'/></span>
                                        }
                                        <Link key={item.name} href={item.href} legacyBehavior>
                                            <a className="-mx-1 block rounded-lg py-2 px-3 text-base font-semibold dark:text-white text-gray-900 leading-7 hover:bg-gray-400/20 ring:transparent outline-none">
                                                {item.name}
                                            </a>
                                        </Link>
                                    </>
                                ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </div>
    )
}

Nav.propTypes = {
    navigation: PropTypes.array
}

export default Nav