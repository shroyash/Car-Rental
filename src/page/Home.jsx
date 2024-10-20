import React from 'react'
import HeroSlider from '../Component/UI/Heroslider'
import About from '../Component/UI/About'
import Service from '../Component/UI/Service'

const Home = () => {
  return (
    <div>
    <section>
      <HeroSlider/>
      <About/>
      <Service/>
    </section>
    </div>
  )
}

export default Home
