import React from 'react'
import ContactUs from './components/ContactUs';
import DisclosureOfYourInformation from './components/DisclosureOfYourInformation';
import UseOfYourInformation from './components/UseOfYourInformation';
import Sidebar from './components/SideBar';

function policy() {

    const data = [
        {
            id: "security-of-your-information",
            title: "security of your information",
            description: "We use administrative, technical, and physical security measures to protect your personal information. However, no security measures are perfect, and no method of data transmission can be guaranteed against interception or misuse."
        },
        {
            id: "policy-for-children",
            title: "policy for children",
            description: "We do not knowingly solicit information from or market to children under 13. If we learn we have collected personal information from a child under 13 without parental consent, we will delete that information as soon as possible."
        },
        {
            id: "changes-to-this-privacy-policy",
            title: "changes to this privacy policy",
            description: "We may update this Privacy Policy to reflect changes to our practices or for legal, operational, or regulatory reasons. Changes will be posted on this page and are effective when posted."
        },
        {
            id: "your-consent",
            title: "your consent",
            description: "By using our website, you consent to our Privacy Policy and agree to its terms."
        }
    ];

    return (
        <main className='mt-10 md:mt-16'>
            <div className="container mx-auto px-2 md:px-5">
                <h1 className='font-semibold text-lg lg:text-3xl'>Privacy Policy</h1>

                <div className='mt-16 grid lg:grid-cols-3 lg:gap-10 xl:gap-12'>
                    <div className='lg:col-span-2 order-2 lg:order-1'>
                        <p className='font-medium'>Effective Date: July 7, 2024</p>

                        <div className='mt-16' id='introduction'>
                            <h3 className=' mb-4 font-semibold lg:text-2xl'>Introduction</h3>
                            <p className='xl:text-xl font-medium xl:leading-9'>
                                EduAI System is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the website.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h3 className=' mb-4 font-semibold lg:text-2xl'>Information We Collect</h3>
                            <p className='xl:text-xl font-medium xl:leading-8'><span className='font-semibold'>Personal Data: </span>
                                Information such as your name, address, email, and phone number, as well as demographic information like age, gender, hometown, and interests, provided when you register or participate in activities on the website.
                            </p>
                        </div>
                    </div>
                    <Sidebar />
                </div>
                <div id="information-we-collect" className='mt-5'>
                    <p className='xl:text-xl font-medium xl:leading-8'><span className='font-semibold'>Derivative Data: </span>
                        Information collected automatically when you access the website, including IP address, browser type, operating system, access times, and pages viewed before and after using the website.
                    </p>
                </div>
                <div className='mt-5'>
                    <p className='xl:text-xl font-medium xl:leading-8'><span className='font-semibold'>Financial Data: </span>
                        Payment information such as credit card details, collected when you make transactions on the website.
                    </p>
                </div>
                <div className='mt-5'>
                    <p className='xl:text-xl font-medium xl:leading-8'><span className='font-semibold'>Data from Social Networks: </span>
                        Information from social media accounts connected to our website, including name, username, location, gender, birth date, email, profile picture, and public data for contacts.
                    </p>
                </div>
                <UseOfYourInformation />
                <DisclosureOfYourInformation />
                {data.map(section => (
                    <div className='mt-16' id={section.id} key={section.id}>
                        <h3 className='capitalize mb-4 font-semibold lg:text-2xl'>{section.title}</h3>
                        <p className='xl:text-xl font-medium xl:leading-9'>{section.description}</p>
                    </div>
                ))}

                <ContactUs />
            </div>
        </main>
    )
}

export default policy
