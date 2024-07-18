import Image from 'next/image'
import React from 'react'
import crystallLeft from "../../../../public/images/crystallLeft.png"
import crystallRight from "../../../../public/images/crystallRight.png"
import VideoComponent from '../VideoComponent'

function About() {
    return (
        <div className='lg:mt-52'>
            <div className=' flex items-center justify-center'>
                <Image width={90} height={90} src={crystallLeft} alt='crystallLeft' />
                <h3 className='text-dark font-medium lg:font-semibold text-lg md:text-4xl mx-5'>About EDUAI</h3>
                <Image width={90} height={90} src={crystallRight} alt='crystallRight' />
            </div>
            <p className='text-center leading-7  md:text-lg lg:leading-10 lg:text-2xl xl:leading-10 xl:text-3xl text-dark/80 mb-7 md:my-7 md:font-medium'>EDUAI is a complete school system that includes an admin system, a teacher app, a parent app, and a student app. Our goal is to streamline school operations and enhance communication and engagement among all stakeholders.</p>
            <div className='h-[260px] sm:h-[300px] md:h-[400px] lg:w-[80%] lg:h-[600px] flex items-center mx-auto'>
                <VideoComponent src={""} />
            </div>
        </div>
    )
}

export default About
