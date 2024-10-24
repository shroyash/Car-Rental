import React from 'react';
import HeroImage from '../Component/UI/HeroImage';
import Img from '../assests/all-img/slide-img/drive.jpg';
import AboutSection from '../Component/UI/AboutSection';
import img1 from '../assests/all-img/slide-img/ava-1.jpg';
import img2 from '../assests/all-img/slide-img/ava-2.jpg';
import img3 from '../assests/all-img/slide-img/ava-3.jpg';
import img4 from '../assests/all-img/slide-img/ava-4.jpg';

const member = [
  { name: "Lila Jha", experience: "5 years of experience", img: img1 },
  { name: "Nija Jha", experience: "5 years of experience", img: img2 },
  { name: "Jukoi Jha", experience: "5 years of experience", img: img3 },
  { name: "Lonlee Jha", experience: "5 years of experience", img: img4 },
];

const About = () => {
  return (
    <div>
      <HeroImage img={Img} title="About" />
      <AboutSection />
      <div className="about-detail container mx-auto my-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="about-img col-span-6">
            <img src={Img} alt="About us" />
          </div>
          <div className="about-img col-span-6">
            <div className="main-heading">
              <h4 className='text-primary font-bold mb-4'>
                We are Commited to provide Safe Ride Solution
              </h4>
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptas ad officiis libero.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptas ad officiis libero.</p>
              <p>Need Any Help?</p>
              <p>9887287823</p>
            </div>
          </div>
        </div>
      </div>

      <div className="members container mx-auto mt-16 mb-16">
        <div className="text-center">
          <div className="heading text-yellow-600 font-bold mb-3">
            <p>Experts</p>
          </div>
          <div className="main-heading font-bold mb-5">
            <h3>Our Members</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {member.map((member, index) => (
              <div key={index} className="relative group overflow-hidden">
                <div className="img overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <div className="text-white space-x-4">
                      <i className="ri-facebook-fill"></i>
                      <i className="ri-instagram-line"></i>
                      <i className="ri-twitter-line"></i>
                      <i className="ri-linkedin-fill"></i>
                    </div>
                  </div>
                </div>
                <div className="member-detail text-center mt-4">
                  <h6 className="my-2 font-bold">{member.name}</h6>
                  <h6>{member.experience}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
