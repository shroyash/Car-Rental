import React from 'react';
import Img from '../../assests/all-img/car-img/bmw-offer.png';

const About = () => {
  return (
    <div className="about-section container mx-auto mt-6 md:mt-20 mb-22 flex flex-col md:flex-row lg:flex-row">
      <div className="lg:w-1/2 md:w-1/2  p-4">
        <div className="about-section__heading mb-2">
          <p className="text-yellow-500">About Us</p>
        </div>
        <div className="about-section__main-heading">
          <h3 className="text-primary font-bold">Welcome to the Car Rent Service</h3>
        </div>
        <div className="about-section__content text-xs leading-3 mt-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis amet aut necessitatibus vitae</p>
          <p>repudiandae, placeat eligendi asperiores illum ab saepe. Vero, qui aut quam voluptates quos</p>
          <p className='mb-4'>laudantium unde repellendus.</p>
        </div>
        <div className="about-section__list-container text-xs mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="about-section__list d-flex">
              <span className="mx-1 text-yellow-500"><i className="ri-check-double-line"></i></span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="about-section__list d-flex">
              <span className="mx-1 text-yellow-500"><i className="ri-check-double-line"></i></span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="about-section__list d-flex">
              <span className="mx-1 text-yellow-500"><i className="ri-check-double-line"></i></span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="about-section__list d-flex">
              <span className="mx-1 text-yellow-500"><i className="ri-check-double-line"></i></span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2 md:mt-16 ">
        <div className="about-section__car-img">
          <img src={Img} className="img-fluid w-full" alt="BMW Offer" />
        </div>
      </div>
    </div>
  );
};

export default About;
