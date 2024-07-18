import Image from 'next/image'
import React from 'react'
import crystallLeft from "../../../../public/images/crystallLeft.png"
import crystallRight from "../../../../public/images/crystallRight.png"
import VideoComponent from '../VideoComponent'

function OverView() {

    const data = [
        {
            id: 1,
            title: "Teacher App",
            description: "This app allows teachers to upload assignments, class materials, and take attendance easily, streamlining the educational process and student tracking.",
            video: ""
        },
        {
            id: 2,
            title: "Parent App",
            description: "This app enables parents to monitor their children's attendance and performance, access study materials and assignments, know exam schedules and grades, and track the school bus to ensure their children's safety",
            video: ""
        },
        {
            id: 3,
            title: "Student App",
            description: "Designed to help students organize their studies, this app provides access to assignments and their due dates, exam schedules, study materials, class schedules, and grades, making it easier for them to track their academic progress.",
            video: ""
        },
        {
            id: 4,
            title: "Admin System",
            description: "This platform streamlines school management by allowing administrators to manage user accounts, generate reports, and oversee operations",
            video: ""
        },
    ]

    return (
        <section className='my-10'>
            <div className='flex items-center justify-center'>
                <Image width={90} height={90} src={crystallLeft} alt='crystallLeft' />
                <h3 className='text-dark font-medium lg:font-semibold text-lg md:text-4xl mx-5'>Project Overview</h3>
                <Image width={90} height={90} src={crystallRight} alt='crystallRight' />
            </div>
            <p className='text-center leading-7  md:text-lg lg:leading-10 lg:text-2xl xl:leading-10 xl:text-3xl text-dark/80 my-7  md:font-medium'>Introducing a suite of integrated applications designed to enhance the educational experience and communication among all stakeholders:</p>
            <div className='md:my-16'>
                {data.map((item, index) => (
                    <div className='my-10 md:my-16 2xl:my-24 grid lg:grid-cols-2  gap-7 items-center' key={item.id}>
                        <div className={` ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                            <span className='text-dark md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium lg:font-semibold lg:leading-9 xl:leading-[50px] 2xl:leading-[50px]'>{item.title}: <span className='text-dark/80 font-normal md:font-medium'>{item.description}</span></span>
                        </div>
                        <div className='h-[260px] sm:h-auto '>
                            <VideoComponent src={item.video} />
                        </div>
                    </div>
                ))}
            </div>


        </section>
    )
}

export default OverView
