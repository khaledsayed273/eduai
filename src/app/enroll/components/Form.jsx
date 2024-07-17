"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const Drawer = dynamic(() => import('./Drawer'), {
    ssr: false,
})
function Form() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    const handleSend = (e) => {
        e.preventDefault()
        // const { fullName, email,  phone } = e.target;
        handleOpen()
    }

    return (
        <form className='lg:w-1/2 xl:w-1/3  my-7 md:my-10 font-medium' onSubmit={(e) => handleSend(e)}>
            <Drawer open={open} handleOpen={handleOpen}/>
            <div className='flex items-start flex-col '>
                <label className='mb-3 capitalize text-lg md:text-2xl cursor-pointer ' htmlFor="fullName">Full name</label>
                <input placeholder='Enter your full name' className='bg-[#E9E9E9CC] w-full p-3 text-lg rounded-md outline-blue' type="text" name="fullName" id="fullName" />
            </div>
            <div className='flex items-start flex-col mt-10'>
                <label className='mb-3 capitalize text-lg md:text-2xl cursor-pointer ' htmlFor="email">email</label>
                <input placeholder='Enter your email' className='bg-[#E9E9E9CC] w-full p-3 text-lg rounded-md outline-blue' type="email" name="email" id="email" />
            </div>
            <div className='flex items-start flex-col mt-10'>
                <label className='mb-3 capitalize text-lg md:text-2xl cursor-pointer ' htmlFor="phone">phone</label>
                <input placeholder='Enter phone number' className='bg-[#E9E9E9CC] w-full p-3 text-lg rounded-md outline-blue' type='number' name="phone" id="phone"></input>
            </div>
            <button className='bg-blue text-white  block mt-10 rounded-lg md:text-2xl capitalize hover:opacity-80 py-4 px-14'>send</button>
        </form>
    )
}

export default Form
