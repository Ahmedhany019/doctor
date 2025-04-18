/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import clinic from "../images/analysis-3707159_640.png"
import parallex from "../images/doctor-6633763_1920.png"

function About({ language }) {
  const translate = {
    en: {
      title: "About Us",
      paragraph1: "We are a team of dedicated professionals committed to providing the best dental care.",
      paragraph2: "Our mission is to help you achieve a healthy and beautiful smile.",
    },
    ar: {
      title: "من نحن",
      paragraph1: "نحن فريق من المحترفين المكرسين لتقديم أفضل رعاية أسنان.",
      paragraph2: "مهمتنا هي مساعدتك في تحقيق ابتسامة صحية وجميلة.",
    }
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.4 }) // 👈 هنا التغيير

  return (
    <section id="about"
      style={{ backgroundImage: `url(${parallex})` }}
      className="bg-fixed bg-cover bg-center"
    >
      <div className='bg-gradient-to-b from-[#87CEFA]/80 via-[#d8cfff]/80 to-white/80 py-20'>
        <div
          ref={ref}
          className='flex flex-col md:flex-row justify-center items-center w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto rounded-xl bg-white shadow-lg backdrop-blur-md overflow-hidden'
        >
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // 👈 كل مرة
            transition={{ duration: 0.7 }}
            className='flex flex-col justify-center items-center w-full p-6 md:p-10'
          >
            <h1 className='text-3xl sm:text-4xl font-bold text-center'>
              {language === "en" ? translate.en.title : translate.ar.title}
            </h1>
            <p className='text-base sm:text-lg mt-4 text-center md:text-left'>
              {language === "en" ? translate.en.paragraph1 : translate.ar.paragraph1}
            </p>
            <p className='text-base sm:text-lg mt-4 text-center md:text-left'>
              {language === "en" ? translate.en.paragraph2 : translate.ar.paragraph2}
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // 👈 كل مرة
            transition={{ duration: 0.7, delay: 0.2 }}
            className='flex justify-center items-center w-full p-6 md:p-10'
          >
            <img
              src={clinic}
              alt="About Us"
              className='w-[80%] max-w-[300px] md:max-w-[400px] mx-auto'
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
