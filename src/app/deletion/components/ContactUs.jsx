import React from 'react'

function ContactUs() {
    return (
        <div id='contact-us' className='mt-10'>
            <h3 className='capitalize mb-4 font-medium md:font-semibold lg:text-2xl'>contact us</h3>
            <div className='text-sm  lg:text-xl md:font-medium xl:leading-8 my-5'>
                If you have any questions or need assistance with the account deletion process, please do not hesitate to contact us at:
            </div>
            <p className='text-sm lg:text-xl md:font-medium xl:leading-8 my-4'><span className='font-medium md:font-semibold'>Email: </span>
                contact@expotech.online
            </p>
            <p className='text-sm lg:text-xl md:font-medium xl:leading-8 my-4'><span className='font-medium md:font-semibold'>Phone: </span>
                0708759037
            </p>
            <p className='text-sm lg:text-xl md:font-medium xl:leading-8 my-4'><span className='font-medium md:font-semibold'>Address: </span>
                Tetouan: Mezanine block B Office n° 4 BOROUJ 16 Avenue des Far N° 873 Tétouan
            </p>
        </div>
    )
}

export default ContactUs
