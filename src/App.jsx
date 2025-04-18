/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  const [language, setLanguage] = useState("en");

  return (
    <>
      <div >
        <Navbar language={language} setLanguage={setLanguage}/>
        <HeroSection language={language}/>
        <About language={language}/>
        <Services language={language}/>
        <Testimonials language={language}/>
        <Footer />
      </div>
    </>
  )
}

export default App
