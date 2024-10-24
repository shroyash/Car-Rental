import React from 'react'
import HeroSlider from '../Component/UI/Heroslider'
import About from '../Component/UI/AboutSection'
import Service from '../Component/UI/Service'
import HotOffer from '../Component/UI/HotOffer'
import Testimonials from '../Component/UI/Testimonials'
import Blog from '../Component/UI/Blog'

const Home = () => {
  return (
    <div>
    <section>
      <HeroSlider/>
      <About/>
      <Service/>
      <HotOffer/>
      <Testimonials/>
      <Blog/>
    </section>
    </div>
  )
}

export default Home
