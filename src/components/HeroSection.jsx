/* eslint-disable no-unused-vars */
import React from 'react'
import hero from "../images/image 4.webp"
import doctor from "../images/image 5.webp"
import spark from "../images/Group 5.webp"
import { motion } from 'framer-motion'

function HeroSection({language}) {
  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className="pt-[100px] flex flex-col md:flex-row justify-between items-center bg-no-repeat bg-cover bg-center h-screen"
    >
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex-1 flex flex-col justify-center items-center md:block px-6 md:px-10 text-center md:text-left"
>
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="text-white text-4xl sm:text-5xl md:text-7xl font-bold"
  >
    Welcome to <span className="text-[#1e90ff]">DR/Ahmed</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="leading-[1.2] capitalize font-semibold text-white text-xl sm:text-2xl md:text-4xl mt-4 w-full md:w-[70%]"
  >
    {language === "en"
      ? "helping you to bring back your smile"
      : "مساعدتك في استعادة ابتسامتك"}
  </motion.p>

  <motion.a
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: 0.8 }}
    href="https://wa.me/201098843280?text=مرحبًا،%20حابب%20أحجز%20موعد%20مع%20الدكتور%20"
    target="_blank"
  >
    <button className='mt-4 hover:bg-[#1568b9] duration-300 bg-[#1e90ff] cursor-pointer text-white py-2 px-4 rounded-xl'>
      {language === "en" ? "Book Now" : "حجز"}
    </button>
  </motion.a>
</motion.div>

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="flex-1 justify-center w-full flex mt-8 md:mt-0 relative"
>
  <div className='z-[999] relative w-full max-w-[400px] '>
    <img
      src={doctor}
      alt="doctor"
      className="mx-auto w-[80%] z-[999] md:w-[90%] lg:w-[100%] h-auto "
    />
    <motion.img
      src={spark}
      alt="spark"
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute z-[999] -top-12 left-20 md:left-12 lg:left-20"
    />
  </div>
</motion.div>

    </div>
  )
}

export default HeroSection
