import React from 'react'
import ContactUs from './components/ContactUs';
import ProhibitedUses from './components/ProhibitedUses';
import IntellectualProperty from './components/IntellectualProperty';
import Sidebar from './components/SideBar';
import Termination from './components/Termination';
import ChangesToTerms from './components/ChangesToTerms';

function terms() {



    return (
        <main className='mt-10 md:mt-16'>
            <div className="container mx-auto px-2 md:px-5">
                <h1 className='font-medium md:font-semibold text-lg lg:text-3xl'>Terms of Service</h1>

                <div className='mt-16 grid lg:grid-cols-3 lg:gap-10 xl:gap-12'>
                    <div className='lg:col-span-2 order-2 lg:order-1'>
                        <p className='md:font-medium'>Effective Date: July 7, 2024</p>

                        <div className='mt-10 lg:mt-16' id='introduction'>
                            <h3 className=' mb-4 font-medium md:font-semibold lg:text-2xl'>Introduction</h3>
                            <p className='text-sm lg:text-xl md:font-medium xl:leading-9'>
                                {`Welcome to EduAI System. Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the eduaisystem.com website (the "Service") operated by EduAI System ("us", "we", or "our").`}
                            </p>
                        </div>
                        <div className='mt-10' id='acceptance-of-terms'>
                            <h3 className=' mb-4 font-medium md:font-semibold lg:text-2xl'>Acceptance of Terms</h3>
                            <p className='text-sm lg:text-xl md:font-medium xl:leading-8'>
                                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                            </p>
                        </div>
                    </div>
                    <Sidebar />
                </div>
                <h3 className='font-medium md:font-semibold lg:text-2xl capitalize mt-7' id='accounts'>accounts</h3>
                <div className='mt-5'>
                    <p className='text-sm lg:text-xl md:font-medium xl:leading-8'><span className='font-medium md:font-semibold'>Account Creation: </span>
                        When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service
                    </p>
                </div>
                <div className='mt-5'>
                    <p className='text-sm lg:text-xl md:font-medium xl:leading-8'><span className='font-medium md:font-semibold'>Account Security: </span>
                        You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                    </p>
                </div>

                <IntellectualProperty />
                <div className='mt-10 lg:mt-16' id='user-content'>
                    <h3 className='capitalize mb-4 font-medium md:font-semibold lg:text-2xl'>user content</h3>
                    <p className='text-sm lg:text-xl md:font-medium xl:leading-8'>
                        Ownership: You retain ownership of any intellectual property rights that you hold in the content you submit to the Service.
                        License: When you upload or otherwise submit content to our Service, you give EduAI System a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute such content
                    </p>
                </div>
                <ProhibitedUses />

                <Termination />

                <div className='mt-10 lg:mt-16' id='governing-law'>
                    <h3 className='capitalize mb-4 font-medium md:font-semibold lg:text-2xl'>governing law</h3>
                    <p className='text-sm lg:text-xl md:font-medium xl:leading-8'>
                        These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions
                    </p>
                </div>
                <ChangesToTerms />

                <ContactUs />
            </div>
        </main>
    )
}

export default terms
