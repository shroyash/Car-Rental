import React from 'react'

const HeroImage = ({img,title}) => {

  return (
    <div className='heroImg relative'>
    <img src={img} alt={img} className='w-full h-52 object-cover' />
    <div className='absolute inset-0 bg-blue-900 opacity-50'></div> {/* Overlay */}
    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-bold z-10'>
        {title}
    </p>
</div>



  )
}

export default HeroImage;