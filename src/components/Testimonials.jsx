/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import avatar from "../images/avatar-05.png"
import parallex from "../images/doctor-utilizing-advanced-digital-tablet-600nw-2481904799.webp"

function Testimonials({ language }) {
  const translate = {
    en: {
      title: "Testimonials",
      paragraph: "What our patients say about us.",
    },
    ar: {
      title: "آراء المرضى",
      paragraph: "ماذا يقول مرضانا عنا.",
    },
  }

  const testimonials = [
    {
      name: "John Doe",
      image: avatar,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
    },
    {
      name: "Jane Smith",
      image: avatar,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
    },
    {
      name: "Alice Johnson",
      image: avatar,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
    },
    {
      name: "Bob Brown",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section
      id="testimonials"
      style={{ backgroundImage: `url(${parallex})` }}
      className="bg-fixed relative bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 px-4 md:px-8 py-16 max-w-5xl mx-auto">
        <div className="text-center text-white mb-12">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-3xl font-bold">
            {language === "en" ? translate.en.title : translate.ar.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg mt-4">
            {language === "en" ? translate.en.paragraph : translate.ar.paragraph}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-xl max-w-[500px] mx-auto"
              >
                <p className="text-gray-800">{testimonial.review}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
