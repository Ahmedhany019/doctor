/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import whiteTeeth from "../images/teeth-2414909_1280.jpg"
import plantTeeth from "../images/pexels-cottonbro-6529110.jpg"
import coverTeeth from "../images/pexels-olly-3946834.jpg"

function Services({ language }) {
  const translate = {
    en: {
      title: "Our Services",
      paragraph: "We offer innovative therapeutic and cosmetic services to make your smile more beautiful and healthier.",
    },
    ar: {
      title: "خدماتنا",
      paragraph: "نحن نقدم خدمات علاجية وتجميليه مبتكرة لجعل ابتسامتك أجمل وأصح.",
    },
  }

  const services = [
    {
      name: language === "en" ? "Teeth Whitening" : "تبييض الأسنان",
      image: whiteTeeth,
      description: language === "en"
        ? "Teeth whitening is a cosmetic procedure that removes stains and brightens your smile."
        : "تبييض الأسنان هو إجراء تجميلي يزيل التصبغات ويجعل ابتسامتك أكثر إشراقًا.",
    },
    {
      name: language === "en" ? "Teeth Cleaning" : "تنظيف الأسنان",
      image: coverTeeth,
      description: language === "en"
        ? "Teeth cleaning removes plaque and tartar to maintain oral health and freshness."
        : "تنظيف الأسنان يزيل الترسبات والبلاك للحفاظ على صحة الفم وانتعاشه.",
    },
    {
      name: language === "en" ? "Dental Implants" : "زراعة الأسنان",
      image: plantTeeth,
      description: language === "en"
        ? "Dental implants provide permanent solutions for missing teeth with a natural look."
        : "زراعة الأسنان توفر حلاً دائمًا للأسنان المفقودة بمظهر طبيعي.",
    }
  ]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {language === "en" ? translate.en.title : translate.ar.title}
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          {language === "en" ? translate.en.paragraph : translate.ar.paragraph}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
