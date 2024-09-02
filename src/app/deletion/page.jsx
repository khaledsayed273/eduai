"use client"
import React from 'react'
import Sidebar from './components/SideBar';
import Considerations from './components/Considerations';
import ImportantConsiderations from './components/ImportantConsiderations';
import ContactUs from './components/ContactUs';

function Deletion() {
 

    return (
        <main className='mt-10 md:mt-16'>
            <div className="container mx-auto px-2 md:px-5">
                <h1 className='font-medium md:font-semibold text-lg lg:text-3xl'>Account Deletion Request</h1>
                <div className='mt-16 grid lg:grid-cols-3 lg:gap-10 xl:gap-12'>
                    <div className='lg:col-span-2 order-2 lg:order-1'>
                        <div id='HowToRequestAccountDeletion'>
                            <h3 className=' mb-4 font-medium md:font-semibold lg:text-2xl'>How to Request Account Deletion</h3>
                            <p className='text-sm lg:text-xl md:font-medium xl:leading-9'>
                                We understand that you may want to delete your account and all associated data from our EDU AI System. To ensure your privacy and data security, we have made the account deletion process straightforward and secure.
                            </p>
                        </div>
                        <Considerations />
                    </div>
                    <Sidebar />
                </div>
                <ImportantConsiderations />
                <ContactUs />
            </div>
        </main>
    )
}

export default Deletion
