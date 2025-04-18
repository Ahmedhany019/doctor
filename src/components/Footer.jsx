import React from 'react'

function Footer() {
  return (
    <footer id='contact' className='bg-[#0A0E31] text-white py-4'>
      <div className='px-4 '>
        <div className='border-b border-b-grey-400 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] md:w-[80%] lg:w-[70%] mx-auto my-10'>
          <div>
          <h1 className='text-3xl font-bold'>DR/<span className='text-[#1e90ff]'>Ahmed</span></h1>
          <p className='mt-2'>Jl. Lebak Bulus I Kav. 29 Cilandak<br/>
          Jakarta Selatan, DKI Jakarta, Indonesia 12340</p>
          </div>
          <div>
          <h1 className='text-2xl font-bold '>Company Info</h1>
          <ul>
            <li className='mt-2'>About Us</li>
            <li className='mt-2'>Contact Us</li>
            <li className='mt-2'>Privacy Policy</li>
            <li className='mt-2'>Terms of Service</li>
          </ul>
          </div>
          <div>
          <h1 className='text-2xl font-bold'>Services</h1>
          <ul>
            <li className='mt-2'>Dental Care</li>
            <li className='mt-2'>Orthodontics</li>
            <li className='mt-2'>Cosmetic Dentistry</li>
            <li className='mt-2'>General Dentistry</li>
          </ul>
          </div>
          <div>
          <h1 className='text-2xl font-bold'>Contact Us</h1>
          <ul>
            <li className='mt-2'>+1 (555) 123-4567</li>
            <li className='mt-2'>8dHbT@example.com</li>
          </ul>
          </div>
        </div>
        <div className='text-center '>
          <p className='text-sm'>© 2025 DR/<span className='text-[#1e90ff]'>Ahmed</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer