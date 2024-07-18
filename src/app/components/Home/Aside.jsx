import Image from 'next/image'
import React from 'react'
import crystallLeft from "../../../../public/images/crystallLeft.png"
import crystallRight from "../../../../public/images/crystallRight.png"
import basicImg from "../../../../public/images/aside/basic.png"
import standardImg from "../../../../public/images/aside/standard.png"
import premiumImg from "../../../../public/images/aside/premium.png"
import background from "../../../../public/images/aside/background.png"
import Link from 'next/link'

function Aside() {

    const data = [
        {
            id: 1,
            title: "basic",
            about: "",
            price: 30,
            image: basicImg,
            details: ["Customizable Features", "Flexible Usage", "Cost-Effective"]
        },
        {
            id: 2,
            title: "standard",
            about: "(Get 2 months free)",
            price: 300,
            image: standardImg,
            details: ["Customizable Features", "Flexible Usage", "Cost-Effective"]
        },
        {
            id: 3,
            title: "premium",
            about: "(Get 4 months free)",
            price: 30,
            image: premiumImg,
            details: ["Customizable Features", "Flexible Usage", "Cost-Effective"]
        },
    ]

    return (
        <aside className='md:mt-28 relative'>
            <Image alt='background' className='-bottom-7 xl:-bottom-16  h-[200px] absolute -z-10' src={background} />
            <div className='flex items-center justify-center'>
                <Image width={90} height={90} src={crystallLeft} alt='crystallLeft' />
                <h3 className='text-dark font-medium lg:font-semibold text-lg md:text-4xl '>Choose your plan</h3>
                <Image width={90} height={90} src={crystallRight} alt='crystallRight' />
            </div>
            <p className='text-center leading-7 md:text-lg lg:leading-10 lg:text-2xl xl:leading-10 xl:text-3xl text-dark/80 my-7 md:font-medium'>Choose your plan and enjoy all the features you need for an exceptional educational experience for your children.</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-16 gap-7 lg:gap-10 xl:gap-20'>
                {data.map(item => (
                    <Link href={"/"} className='hover:scale-95 transition-all duration-300 py-8 px-5 rounded-xl bg-white shadow-[0_0px_50px_-5px_rgba(0,40,100,0.25)]' key={item.id}>
                        <div className='text-center'>
                            <h3 className='text-lg md:text-2xl	capitalize mb-4 font-medium lg:font-semibold'>{item.title}</h3>
                            <h4 className='text-xl md:text-4xl font-medium lg:font-semibold'>${item.price}</h4>
                            {item.about !== "" ? (<p className='md:text-lg lg:text-xl mt-5'>{item.about}</p>) : (<div className='mb-12'></div>)}
                        </div>
                        <Image className='mx-auto' alt={item.title} src={item.image} />
                        <ol style={{ "listStyleType": "inherit" }} className='mt-10 px-5'>
                            {item.details.map((detail, index) => (
                                <li className='my-4 md:font-medium marker:text-[#0066FF] md:text-lg' key={index}>{detail}</li>
                            ))}
                        </ol>
                    </Link>
                ))}
            </div>
        </aside>
    )
}

export default Aside
