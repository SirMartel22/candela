import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Video from './Components/Video/Video'
// import Organization from './Components/Organization/Organization'
import Contact from './Components/Contact/Contact';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';
import Testing from './Components/Test/Testing'
import NewSlider from './Components/NewSlider/NewSlider'
// import NewTestimony from './Components/NewTestimony/NewTestimony'
import NewTestimony from './Components/Testimonials/NewTestimony';

// import { images } from './Components/Slider/Slider.json'

import { Slider } from './Components/Slider/Slider'


const App = () =>{

  return (

    <div>
      <Navbar />
      <Hero />
      <About />

      {/* <Slider imageSlider= { images } /> */}
      <Slider  />

      {/* <Gallery /> */}
      {/* <NewSlider /> */}
      <Video />
      {/* <Organization /> */}
      <Testing />
      <Join />
      {/* <Testimonials /> */}
      <NewTestimony />
      <Contact />
      <Footer />
    </div>
  )

}


export default App; 