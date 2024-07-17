"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from "../../../public/logo.png"
import { usePathname } from 'next/navigation'

function Navbar() {

    const pathName = usePathname()
    const [showNav, setShowNav] = useState(false)

    const ul = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "privacy policy",
            href: "/policy"
        },
        {
            name: "terms of service",
            href: "/terms"
        },
        {
            name: "faq",
            href: "/faq"
        },
        {
            name: "Contact us",
            href: "/enroll"
        },

    ]

    const checkToHiddenScroll = () => {
        if (showNav && window.innerWidth <= 719) {
            window.document.documentElement.style.overflowY = "hidden";
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            window.document.documentElement.style.overflowY = "auto";
        }
    }

    const handleNav = () => {
        setShowNav(!showNav)
    }

    useEffect(() => {
        checkToHiddenScroll()

    }, [showNav])

    return (
        <nav>
            <div className="container mx-auto py-4 md:py-5 px-2 md:px-5">
                <div className='flex justify-between items-center'>
                    <Link className='hover:scale-110 transition-all duration-300' href={"/"}>
                        <Image sizes="(min-width: 808px) 50vw, 100vw" width={60} height={60} src={logo} alt='logo' />
                    </Link>
                    <ul className={`flex transition-all z-40 duration-300 flex-col items-center justify-center md:items-start md:justify-end  md:flex-row bg-white md:bg-transparent w-full ${showNav ? "left-0" : "left-full"}  h-[100vh] md:h-auto top-0 absolute md:static`}>
                        {ul.map((item, index) => (
                            <li onClick={() => setShowNav(!showNav)} className='md:ms-7 mb-16 md:mb-0' key={index}>
                                <Link className={`${pathName === item.href ? "text-blue" : "text-black"} capitalize hover:text-blue md:text-lg lg:text-2xl font-medium`} href={`${item.href}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleNav} className='md:hidden z-50'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
