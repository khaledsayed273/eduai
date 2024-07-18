import React from 'react'
import Form from './components/Form'

function enroll() {
    return (
        <main className='md:mt-16'>
            <div className="container mx-auto px-2 md:px-5">
                <p className='text-[#263238] leading-7 md:text-lg lg:leading-10 lg:text-2xl xl:leading-10 xl:text-3xl text-gray my-7 md:font-medium'>Please fill in your information, and we will contact you to complete the registration process.</p>
                <Form />
            </div>
        </main>
    )
}

export default enroll
