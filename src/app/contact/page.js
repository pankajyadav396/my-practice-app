import React from 'react'
import Navsec from '../components/Navsec'

const page = () => {
    const contact = [
        {
            title: "my name is pankaj",
            title2: "9887"
        },
        {
            title: "my name is raju",
            title2: "987"

        },
        {
            title: "my name is kaju",
            title2: "9889u7"
        },
        {
            title: "my name is kaju",
            title2: "9889u7"
        },
        {
            title: "my name is kaju",
            title2: "9889u7"
        },

    ]
    return (
        <>
            <Navsec />
            <div className=' min-h-[100vh]'>
                <div className=' grow flex items-center flex-col justify-center'>
                    {
                        contact.map((myu, index) => {
                            return (
                                <div className=' bg-red-500 py-50 px-30'>
                                    <h1 className={`${index !== 2 ? "text-red" : " text-black"}`}>{myu.title}</h1>
                                    <p className='0'>{myu.title2}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default page

