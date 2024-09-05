import Image from 'next/image'
import React from 'react'
import crystallLeft from "../../../../public/images/crystallLeft.png"
import crystallRight from "../../../../public/images/crystallRight.png"
import Link from 'next/link'
import studentImg from "../../../../public/images/demo/studentDemo.png"
import parentImg from "../../../../public/images/demo/parentDemo.png"
import teacherImg from "../../../../public/images/demo/teacher.png"
import adminImg from "../../../../public/images/demo/admin.png"
function Demo() {
    return (
        <div id='demo' className='mt-10 md:mt-28'>
            <div className='flex items-center justify-center'>
                <Image width={90} height={90} src={crystallLeft} alt='crystallLeft' />
                <h3 className='text-dark font-medium lg:font-semibold text-lg md:text-xl lg:text-4xl text-center'>
                    Experience Our Comprehensive School System
                </h3>
                <Image width={90} height={90} src={crystallRight} alt='crystallRight' />
            </div>
            <p className='text-center leading-7 md:text-lg lg:leading-10 lg:text-2xl xl:leading-10 xl:text-3xl text-dark/80 my-7 md:font-medium'>
                Explore an interactive experience with dedicated apps for students, teachers, and parents, along with a powerful dashboard for administrators.
            </p>

            <div className='flex mt-20 flex-wrap  justify-center gap-20'>
                <Link className='w-[350px] h-[310px] hover:scale-105 transition-transform duration-300 ' href={"/"}>
                    <div className='relative w-[350px] h-[180px]'>
                        <Image sizes='100vw' placeholder='blur' src={studentImg} fill alt='Student Demo' />
                    </div>
                    <h3 className='text-center my-4 text-lg lg:text-2xl '>Student Demo</h3>
                    <button className='mx-auto block'>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="9" fill="#407BFF" />
                            <path d="M46.6667 25.8334C46.5629 22.9792 46.2085 21.2502 44.998 20.0419C43.2864 18.3334 40.5314 18.3334 35.0215 18.3334C29.5117 18.3334 26.7568 18.3334 25.0451 20.0419C23.3334 21.7505 23.3334 24.5003 23.3334 30V40C23.3334 45.4997 23.3334 48.2495 25.0451 49.9582C26.7568 51.6667 29.5117 51.6667 35.0215 51.6667C40.5314 51.6667 43.2864 51.6667 44.998 49.9582C46.2085 48.7499 46.5629 47.0209 46.6667 44.1667" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M33.3334 46.6666H36.6667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M30 18.3334L30.1483 19.2234C30.4698 21.1522 30.6305 22.1166 31.292 22.7034C31.982 23.3156 32.9602 23.3334 35 23.3334C37.0398 23.3334 38.018 23.3156 38.708 22.7034C39.3695 22.1166 39.5302 21.1522 39.8517 19.2234L40 18.3334" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
                <Link className='w-[350px] h-[310px] hover:scale-105 transition-transform duration-300 ' href={"/"}>
                    <div className='relative w-[350px] h-[180px]'>
                        <Image sizes='100vw' placeholder='blur' src={parentImg} fill alt='Parent Demo' />
                    </div>
                    <h3 className='text-center my-4 text-lg lg:text-2xl '>Parent Demo</h3>
                    <button className='mx-auto block'>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="9" fill="#407BFF" />
                            <path d="M46.6667 25.8334C46.5629 22.9792 46.2085 21.2502 44.998 20.0419C43.2864 18.3334 40.5314 18.3334 35.0215 18.3334C29.5117 18.3334 26.7568 18.3334 25.0451 20.0419C23.3334 21.7505 23.3334 24.5003 23.3334 30V40C23.3334 45.4997 23.3334 48.2495 25.0451 49.9582C26.7568 51.6667 29.5117 51.6667 35.0215 51.6667C40.5314 51.6667 43.2864 51.6667 44.998 49.9582C46.2085 48.7499 46.5629 47.0209 46.6667 44.1667" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M33.3334 46.6666H36.6667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M30 18.3334L30.1483 19.2234C30.4698 21.1522 30.6305 22.1166 31.292 22.7034C31.982 23.3156 32.9602 23.3334 35 23.3334C37.0398 23.3334 38.018 23.3156 38.708 22.7034C39.3695 22.1166 39.5302 21.1522 39.8517 19.2234L40 18.3334" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
            </div>
            <div className='flex mt-12  flex-wrap mb-30 justify-center gap-20'>
                <Link className='w-[350px]  h-[310px] hover:scale-105 transition-transform duration-300 ' href={"/"}>
                    <div className='relative w-[350px] h-[180px]'>
                        <Image sizes='100vw' placeholder='blur' src={teacherImg} fill alt='Teacher Demo' />
                    </div>
                    <h3 className='text-center my-4 text-lg lg:text-2xl '>Teacher Demo</h3>
                    <button className='mx-auto block'>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="9" fill="#407BFF" />
                            <path d="M46.6667 25.8334C46.5629 22.9792 46.2085 21.2502 44.998 20.0419C43.2864 18.3334 40.5314 18.3334 35.0215 18.3334C29.5117 18.3334 26.7568 18.3334 25.0451 20.0419C23.3334 21.7505 23.3334 24.5003 23.3334 30V40C23.3334 45.4997 23.3334 48.2495 25.0451 49.9582C26.7568 51.6667 29.5117 51.6667 35.0215 51.6667C40.5314 51.6667 43.2864 51.6667 44.998 49.9582C46.2085 48.7499 46.5629 47.0209 46.6667 44.1667" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M33.3334 46.6666H36.6667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M30 18.3334L30.1483 19.2234C30.4698 21.1522 30.6305 22.1166 31.292 22.7034C31.982 23.3156 32.9602 23.3334 35 23.3334C37.0398 23.3334 38.018 23.3156 38.708 22.7034C39.3695 22.1166 39.5302 21.1522 39.8517 19.2234L40 18.3334" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
                <Link className='w-[350px] h-[310px] hover:scale-105 transition-transform duration-300 ' href={"/"}>
                    <div className='relative w-[350px] h-[180px]'>
                        <Image sizes='100vw' placeholder='blur' src={adminImg} fill alt='Student Demo' />
                    </div>
                    <h3 className='text-center my-4 text-lg lg:text-2xl '>Admin Demo</h3>
                    <button className='mx-auto block'>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="9" fill="#407BFF" />
                            <path d="M38.3334 18.3334H31.6667C26.2013 18.3334 23.4686 18.3334 21.5316 19.6897C20.8149 20.1915 20.1915 20.8149 19.6897 21.5316C18.3334 23.4686 18.3334 26.2013 18.3334 31.6667C18.3334 37.132 18.3334 39.8647 19.6897 41.8019C20.1915 42.5185 20.8149 43.1419 21.5316 43.6437C23.4686 45 26.2013 45 31.6667 45H38.3334C43.7987 45 46.5314 45 48.4685 43.6437C49.1852 43.1419 49.8085 42.5185 50.3104 41.8019C51.6667 39.8647 51.6667 37.132 51.6667 31.6667C51.6667 26.2013 51.6667 23.4686 50.3104 21.5316C49.8085 20.8149 49.1852 20.1915 48.4685 19.6897C46.5314 18.3334 43.7987 18.3334 38.3334 18.3334Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M33.3334 40H36.6667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M39.1667 51.6667L38.6409 50.9685C37.4555 49.3948 37.1615 46.9907 37.9114 45M30.8334 51.6667L31.3592 50.9685C32.5445 49.3948 32.8385 46.9907 32.0887 45" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M26.6666 51.6666H43.3333" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>

                    </button>
                </Link>
            </div>


        </div>
    )
}

export default Demo
