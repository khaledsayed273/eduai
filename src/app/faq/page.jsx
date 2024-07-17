"use client"
import React, { useState } from 'react'

import img from "../../../public/images/faq.png"
import Image from 'next/image';
function Page() {

    const faqs = [
        {
            question: "What is EduAI System?",
            answer: "EduAI System is an advanced education management platform that utilizes artificial intelligence to enhance the learning experience for students, streamline administrative tasks for educators, and provide insightful analytics for school administrators."
        },
        {
            question: "How can I create an account?",
            answer: "To create an account, visit our sign-up page and fill in the required details. Follow the instructions to complete the registration process."
        },
        {
            question: "What should I do if I forget my password?",
            answer: "Click on the 'Forgot Password' link on the login page and follow the instructions to reset your password."
        },
        {
            question: "How can I update my profile information?",
            answer: "Go to your account settings and update your profile information as needed."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers."
        },
        {
            question: "How can I view my payment history?",
            answer: "You can view your payment history in the 'Billing' section of your account settings."
        },
        {
            question: "What features are available for students?",
            answer: "EduAI System offers various features for students including personalized learning paths, progress tracking, and interactive lessons."
        },
        {
            question: "How can teachers use the EduAI System?",
            answer: "Teachers can use EduAI System to manage their classes, track student progress, and provide personalized feedback."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support through the 'Contact Us' page or by emailing support@eduaisystem.com."
        },
        {
            question: "Where can I find user guides and tutorials?",
            answer: "User guides and tutorials are available in the 'Help Center' section of our website."
        }
    ];

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = index => {
        if (openFaq === index) {
            setOpenFaq(null);
        } else {
            setOpenFaq(index);
        }
    };
    return (
        <main>
            <div className="container mx-auto px-3 md:px-5 mt-10 md:mt-20 ">
                <div className='grid lg:grid-cols-2 gap-5'>
                    <div className='relative h-[270px] w-[250px] md:h-[400px] max-w-[350px] md:max-w-[450px] md:w-[400px] lg:w-[380px] xl:w-[450px] mx-auto lg:mx-0'>
                        <Image src={img} fill alt='faq' />
                    </div>
                    <div >
                        <h1 className="text-3xl font-bold mb-8 relative">FAQ</h1>
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b py-4">
                                <div className="flex justify-between items-center cursor-pointer select-none" onClick={() => toggleFaq(index)}>
                                    <h3 className="text-lg font-medium">{faq.question}</h3>
                                    {openFaq === index ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-blue">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-blue">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    )}
                                </div>
                                {openFaq === index && <p className="mt-3 text-gray">{faq.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page
