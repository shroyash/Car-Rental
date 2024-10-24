import React from 'react'
import HeroImage from '../Component/UI/HeroImage';
import Img from '../assests/all-img/blog-img/blog-3.jpg';
import BlogSection from '../Component/UI/Blog'

const Blog = () => {
  return (
    <div>
     <HeroImage img={Img} title="Blog"/>
     <div className='blog my-14'>
     <BlogSection/>

     </div>
   
    </div>
  )
}

export default Blog
