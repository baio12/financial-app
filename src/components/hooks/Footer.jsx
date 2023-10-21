import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function Footer() {
    return (
        <div className='w-full dark:text-white text-gray-900 dark:bg-black bg-white border-t dark:border-white border-gray-100'>
            <div className='w-full max-w-screen-lg mx-auto pt-8 sm:pt-10'>
                <div className='w-full flex flex-col lg:flex-row gap-4 p-4'>
                    <div className='w-full lg:w-1/2 text-center lg:text-left'>
                        Este proyecto ha sido diseñado y desarrollado por Angel Gustavo Suárez Ballato <HeartIcon  className='w-6 h-6 inline-block text-red-600'/>
                    </div>
                    <div className='w-full lg:w-1/2 text-center'>
                        Te invito a estar en contacto conmigo:
                        <div className='w-full flex gap-4 justify-between mt-6 lg:mt-4 px-2 lg:px-4'>
                            <Link target='_blank' href='mailto:ballato.job@gmail.com' rel='noreferrer'>
                                <Image 
                                alt='Email'
                                src='/../email.svg'
                                height={45}
                                width={45}
                                className='dark:invert invert-0'
                                />
                            </Link>
                            <Link target='_blank' href='https://instagram.com/angel_s_ballato' rel='noreferrer'>
                                <Image 
                                alt='Instagram'
                                src='/../instagram.svg'
                                height={45}
                                width={45}
                                className='dark:invert invert-0'
                                />
                            </Link>
                            <Link target='_blank' href='https://github.com/baio12' rel='noreferrer'>
                                <Image 
                                alt='Github'
                                src='/../github.svg'
                                height={45}
                                width={45}
                                className='dark:invert invert-0'
                                />
                            </Link>
                            <Link target='_blank' href='https://www.linkedin.com/in/angel-su%C3%A1rez-ballato-a11b1521a' rel='noreferrer'>
                                <Image 
                                alt='LinkedIn'
                                src='/../linkedin.svg'
                                height={45}
                                width={45}
                                className='dark:invert invert-0'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center py-9'>
                    <span>
                        <Image 
                            alt='baio logo'
                            src='/baio_logo.svg'
                            width={140}
                            height={70}
                            className='dark:invert invert-0'
                        />
                    </span>
                </div>
                <div className='w-full p-4 text-center'>
                    Este proyecto ha sido desarrollado con:
                    <div className='w-full flex justify-center items-center py-4 gap-8'>
                        <div>
                            <Image 
                                alt='test'
                                src='/nextjs-13.svg'
                                width={100}
                                height={60}
                                className='dark:invert invert-0'
                            />
                        </div>
                        <div>
                            <Image 
                                alt='test'
                                src='/tailwindcss.svg'
                                width={60}
                                height={60}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer