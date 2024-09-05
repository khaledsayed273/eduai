import Image from 'next/image'
import React from 'react'
import logo from "../../../public/footerLogo.png"
import Link from 'next/link'
import FooterSocialMedia from './FooterSocialMedia'

function Footer() {
  return (
    <footer className='bg-[#F5F5F5] mt-10'>
      <div className="container pb-5 pt-10 mx-auto px-2 md:px-5">
        <div className="grid gap-10 md:gap-10 lg:gap-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 ">
        <Link href={"/"} className='relative hover:scale-95 transition-all duration-300 w-[70px] h-[70px]  md:w-[100px] md:h-[100px] xl:w-[80px] xl:h-[80px]'>
          <Image sizes="(min-width: 808px) 50vw, 100vw" fill src={logo} alt='logo' />
        </Link>
          <ul className='capitalize xl:col-span-2'>
            <h3 className='text-lg md:text-xl font-medium md:font-semibold mb-5'>Help & Information :</h3>
            <li className='my-4'><Link className='text-sm md:text-lg hover:underline' href={"/terms"}>terms of service</Link></li>
            <li className='my-4'><Link className='text-sm md:text-lg hover:underline' href={"/policy"}>privacy policy</Link></li>
            <li className='my-4'><Link className='text-sm md:text-lg hover:underline' href={"/support"}>support</Link></li>
            <li className='my-4'><Link className='text-sm md:text-lg hover:underline' href={"/faq"}>faq</Link></li>
            <li className='my-4'><Link className='text-sm md:text-lg hover:underline' href={"/deletion"}>deletion</Link></li>
          </ul>
          <ul className='capitalize xl:col-span-2'>
            <h3 className='text-lg md:text-xl font-medium md:font-semibold mb-5'>Contact Information :</h3>
            <li className='my-4 text-sm md:text-lg'>contact@eduai.tech</li>
            <li className='my-4 text-sm md:text-lg'>+212657396706</li>
            <li className='my-4 text-sm md:text-lg'>Mezanine block B Office n° 4 BOROUJ 16 Avenue des Far N° 873 Tétouan, Morocco</li>
          </ul>
          <FooterSocialMedia/>

        </div>
        <span className='mt-10 block text-center text-sm font-medium md:font-semibold'>Copyrights © 2024, EDUAI - All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer
