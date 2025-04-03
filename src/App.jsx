import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Video from './Components/Video/Video'
import Contact from './Components/Contact/Contact';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';
import Testing from './Components/Test/Testing'

import { Slider } from './Components/Slider/Slider'

import { Testifiers } from './Components/Testimonials/Testimonials.json'


const App = () =>{

  return (

    <div>
      <Navbar />
      <Hero />
      <About />
      <Slider  />
      <Video />
      <Testing />
      <Join />
      <Testimonials Testifiers = { Testifiers } />

      <Contact />
      <Footer />
    </div>
  )

}


export default App; 