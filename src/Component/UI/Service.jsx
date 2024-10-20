import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './carRent.css';

const Service = () => {
  return (
    <div className="service h-screen flex items-center justify-center  ">
      <div className="text-center">
        <div className="service__heading text-yellow-600 font-bold mb-3 ">
          <p>See Our</p>
        </div>
        <div className="service__main-heading font-bold mb-5">
          <h3>Popular Services</h3>
        </div>
        <div className="service__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="service__card p-6 bg-gray-100 rounded-lg ">
            <span className="text-3xl text-yellow-600 mb-4 block"><i className="ri-map-pin-2-line"></i></span>
            <h6 className="mb-2">City Transfer</h6>
            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem numquam aliquid eius</p>
          </div>
          <div className="service__card p-6 bg-gray-100 rounded-lg ">
            <span className="text-3xl text-yellow-600 mb-4 block"><i className="ri-map-pin-2-line"></i></span>
            <h6 className="mb-2">City Transfer</h6>
            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem numquam aliquid eius</p>
          </div>
          <div className="service__card p-6 bg-gray-100 rounded-lg ">
            <span className="text-3xl text-yellow-600 mb-4 block"><i className="ri-map-pin-2-line"></i></span>
            <h6 className="mb-2">City Transfer</h6>
            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem numquam aliquid eius</p>
          </div>
          <div className="service__card p-6 bg-gray-100 rounded-lg">
            <span className="text-3xl text-yellow-600 mb-4 block"><i className="ri-map-pin-2-line"></i></span>
            <h6 className="mb-2">City Transfer</h6>
            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem numquam aliquid eius</p>
          </div>
          <div className="service__card p-6 bg-gray-100 rounded-lg">
            <span className="text-3xl text-yellow-600 mb-4 block"><i className="ri-map-pin-2-line"></i></span>
            <h6 className="mb-2">City Transfer</h6>
            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem numquam aliquid eius</p>
          </div>
          <div className="service__card p-6 bg-gray-100 rounded-lg">
            <span className="text-3xl text-yellow-600 mb-4 block"><i className="ri-map-pin-2-line"></i></span>
            <h6 className="mb-2">City Transfer</h6>
            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem numquam aliquid eius</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

