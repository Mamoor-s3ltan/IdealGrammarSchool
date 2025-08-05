import React from 'react'
import Header from '../components/header'
import HeroSection from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/About'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'


const Landing = () => {
  return (
    <>
   <Header/>
   <HeroSection/>
   <About/>
   <Testimonial/>
   <Team/>
   <Footer/>
    </>
  )
}

export default Landing 