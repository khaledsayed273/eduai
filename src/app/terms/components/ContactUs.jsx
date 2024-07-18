import React from 'react'

function ContactUs() {
    return (
        <div id='contact-us' className='mt-10'>
            <h3 className='capitalize mb-4 font-medium md:font-semibold lg:text-2xl'>contact us</h3>
            <p className='text-sm lg:text-xl md:font-medium xl:leading-8 my-4'><span className='font-medium md:font-semibold'>Email: </span>
                support@eduaisystem.com
            </p>
            <p className='text-sm lg:text-xl md:font-medium xl:leading-8 my-4'><span className='font-medium md:font-semibold'>Phone: </span>
                +123-456-7890
            </p>
            <p className='text-sm lg:text-xl md:font-medium xl:leading-8 my-4'><span className='font-medium md:font-semibold'>Address: </span>
                123 Education Lane, Knowledge City, Country
            </p>
        </div>
    )
}

export default ContactUs
