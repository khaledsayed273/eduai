import Image from 'next/image'
import React from 'react'
import mobileImg from "../../../../public/images/mobile.png"
import Link from 'next/link'

function Header() {
    return (
        <header className='my-10 md:my-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='lg:col-span-2 md:mt-16 lg:mt-5 xl:mt-14 2xl:mt-20'>
                    <h1 className='leading-9 lg:leading-[80px] xl:leading-[80px] md:leading-10 text-lg md:text-2xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-medium md:font-semibold'>Empowering Education at Your Fingertips with EDUAI</h1>
                    <p className='my-10 lg:text-2xl text-gray md:font-medium'>Discover a new way of learning that connects teachers, parents, and students on one convenient and easy-to-use platform. Sign up now to learn more!</p>
                    <div className='mt-3 flex justify-center sm:justify-start'>
                        <Link className='bg-blue text-white py-2 md:py-4 px-14 inline-block rounded-md hover:opacity-80 font-medium' href={"/enroll"}>Enroll now</Link>
                    </div>
                </div>
                <div className='mt-10 md:mt-0'>
                    <Image className='mx-auto' width={450} height={500} src={mobileImg} alt='mobile' />
                </div>
            </div>
        </header>
    )
}

export default Header
