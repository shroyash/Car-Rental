import React from 'react'
import HeroSlider from '../Component/UI/Heroslider'
import About from '../Component/UI/About'
import Service from '../Component/UI/Service'
import HotOffer from '../Component/UI/HotOffer'
import Testimonials from '../Component/UI/Testimonials'

const Home = () => {
  return (
    <div>
    <section>
      <HeroSlider/>
      <About/>
      <Service/>
      <HotOffer/>
      <Testimonials/>
    </section>
    </div>
  )
}

export default Home
