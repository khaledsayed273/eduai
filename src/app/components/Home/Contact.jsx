"use client"
import React from 'react'

function Contact() {

    const handleSend = (e) => {
        e.preventDefault()
        // const { name, email, subject, message } = e.target;
    }

    return (
        <div className='mt-14 lg:mt-20 xl:mt-24' >
            <h3 className='text-xl md:text-4xl text-center'>Contact us</h3>
            <p className='text-center leading-7 md:text-lg lg:leading-10 lg:text-[28px] xl:leading-10 xl:text-3xl text-gray my-7 lg:font-medium'>{`Do you have any questions or need more information? Don't hesitate to get in touch with us; we're here to help!`}</p>

            <form className='lg:w-3/4 mx-auto my-20 md:font-medium' onSubmit={(e) => handleSend(e)}>
                <div className='grid md:grid-cols-2 md:gap-7 xl:gap-16 mb-10'>
                    <div className='flex items-start flex-col'>
                        <label className='mb-3 capitalize  md:text-2xl cursor-pointer ' htmlFor="name">name</label>
                        <input className='bg-[#ddd8d8] w-full p-2  rounded-md outline-blue' type="text" name="name" id="name" />
                    </div>
                    <div className='flex items-start flex-col mt-8 md:mt-0'>
                        <label className='mb-3 capitalize md:text-2xl cursor-pointer ' htmlFor="email">email</label>
                        <input className='bg-[#ddd8d8] w-full p-2 rounded-md outline-blue' type="email" name="email" id="email" />
                    </div>
                </div>
                <div className='flex items-start flex-col'>
                    <label className='mb-3 capitalize  md:text-2xl cursor-pointer ' htmlFor="subject">subject</label>
                    <input className='bg-[#ddd8d8] w-full p-2  rounded-md outline-blue' type="text" name="subject" id="subject" />
                </div>
                <div className='flex items-start flex-col mt-10'>
                    <label className='mb-3 capitalize  md:text-2xl cursor-pointer ' htmlFor="message">message</label>
                    <textarea className='bg-[#ddd8d8] w-full p-2  rounded-md outline-blue min-h-[200px] max-h-[200px]' name="message" id="message"></textarea>
                </div>
                <button className='bg-blue text-white mx-auto block mt-10 rounded-lg md:text-2xl capitalize hover:opacity-80 py-4 px-14'>send</button>
            </form>
        </div>
    )
}

export default Contact
