/* eslint-disable no-unused-vars */
import React from 'react'

function Navbar({setLanguage,language}) {

    const pages =language ==='en'?[
        {name:"Home",link:"home"},
        {name:"About",link:"about"},
        {name:"Services",link:"services"},
        {name:"Testimonials",link:"testimonials"},
        {name:"Contact",link:"contact"},
    ]:[
        {name:"الرئيسية",link:"home"},
        {name:"من نحن",link:"about"},
        {name:"خدماتنا",link:"services"},
        {name:"اراء المرضى",link:"testimonials"},
        {name:"اتصل بنا",link:"contact"},
    ]

    const pagesList = pages.map((page,i) => {
        return (
            <li className='hover:text-[#1e90ff] duration-300 font-semibold cursor-pointer' key={i}>
                <a href={`#${page.link}`}>{page.name}</a>
            </li>
        )
    })

  return (
    <div className='absolute text-white z-[999] top-0 left-0 right-0 py-4'>
        <div className='flex flex-wrap justify-between items-center h-full px-10'>
            <h1 className='text-3xl font-bold'>DR/<span className='text-[#1e90ff]'>Ahmed</span></h1>
            <ul className=' gap-4 hidden md:flex'>{pagesList}</ul>
            <div className='flex gap-4'>
            <a href="https://wa.me/201098843280?text=مرحبًا،%20حابب%20أحجز%20موعد%20مع%20الدكتور%20" target="_blank">
                <button className='hover:bg-[#1568b9] duration-300 bg-[#1e90ff] cursor-pointer text-white py-2 px-4 rounded-xl'>{language ==="en"?"Book Now":"حجز"}</button>
            </a>
            <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className='hover:bg-[#1568b9] duration-300 bg-[#1e90ff] cursor-pointer text-white py-2 px-4 rounded-xl'>{language ==="en"?"عربي":"En"}</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar

