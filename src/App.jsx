import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Video from './Components/Video/Video'
import Contact from './Components/Contact/Contact';



const App = () =>{

  return (

    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Video />
      {/* <Contact /> */}
    </div>
  )

}


export default App; 