"use client"

import { useState } from "react"

const Navsec = () => {

    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classList.add("overflow-hidden")
        }
        else {
            document.body.classList.remove("overflow-hidden")
        }
    };
    return (
        <>
            <div className='h-[90px] bg-skyblue w-100 flex align-center'>
                <div className='max-w-[1140px] justify-content-center flex'>
                    <div className='flex justify-between align-center my-auto max-w-[1140px] w-full'>
                        <ul className={`${nav ? "open" : "not-open"
                            } flex justify-center align-center m-0 p-0 gap-4 mobileView`}>
                            <li><a onClick={show} href="/" className='home relative  after:absolute after:w-0 hover:after:w-full after:right-0 hover:after:left-0 after:bg-fuchsia-700 after:h-[2px] after:duration-300 after:bottom-0 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>How It Works</a></li>
                            <li><a onClick={show} href="/brand" className='home relative  after:absolute after:w-0 hover:after:w-full after:right-0 hover:after:left-0 after:bg-fuchsia-700 after:h-[2px] after:duration-300 after:bottom-0 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>For Brands</a></li>
                            <li><a onClick={show} href="/about" className='home relative  after:absolute after:w-0 hover:after:w-full after:right-0 hover:after:left-0 after:bg-fuchsia-700 after:h-[2px] after:duration-300 after:bottom-0 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>About Us</a></li>
                            <li><a onClick={show} href="/contact" className='home relative  after:absolute after:w-0 hover:after:w-full after:right-0 hover:after:left-0 after:bg-fuchsia-700 after:h-[2px] after:duration-300 after:bottom-0 color-white fs-sm fw-normal ff-outfit lh-24 text-decoration-none list-unstyled'>Contact</a></li>
                        </ul>
                        <label className=' sm:hidden cursor-pointer' id='menu' onClick={show}>
                            {nav ? (
                                <div id='menu' className='relative z-40'>
                                    <span className=' span1'></span>
                                    <span className=' span2'></span>
                                    <span className=' span3'></span>
                                </div>
                            ) : (
                                <div className='relative z-40'>
                                    <span className=' span4'></span>
                                    <span className='span5'></span>
                                    <span className=' span6'></span>
                                </div>
                            )}
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navsec