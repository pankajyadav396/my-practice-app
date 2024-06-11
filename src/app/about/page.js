import React from 'react'
import Navsec from '../components/Navsec'

const page = () => {
    return (
        <div>
            <Navsec />
            <h1>hello world</h1>
            
            <h1 className=' after:absolute after:bottom-0 after:duration-300 inline  duration-300 after:bg-gredient-to-r after:from-indigo-700 after:from-30% after:to-red-500 after:w-0 after:right-0 hover:after:left-0 relative after:h-[20px] text-[100px] text-nowrap hover:after:w-full'>
                hey welcome to about section    
            </h1>
            
        </div>
    )
}

export default page