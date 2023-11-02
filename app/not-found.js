'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = '/';
        }, 4000); // Redirect after 3 seconds
    }, []);

    return (
        <div className='max-h-fit py-5 lg:px-32'>
            <div className='flex justify-center mt-5'>
                <Link href="/" className='font-bold text-xl hover:border-2'>You will be redirected to the homepage shortly</Link>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <Image
                    src="/404Logo.png"
                    alt="404 Logo"
                    width={400}
                    height={400}
                    className='rounded-lg bg-black border-2 border border-red-500'
                />
            </div>
            <h2 className='text-center text-xl font-semibold mt-2'>Request Not Found</h2>
        </div>
    )
}
