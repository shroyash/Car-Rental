import React, { useState } from 'react';
import serviceData from '../../assests/data/servivedata';

const Service = () => {
  const [service, setService] = useState(serviceData);
  
  return (
    <div className="service container mx-auto mt-16 mb-16">
      <div className="text-center">
        <div className="service__heading text-yellow-600 font-bold mb-3">
          <p>See Our</p>
        </div>
        <div className="service__main-heading font-bold mb-5">
          <h3>Popular Services</h3>
        </div>
        <div className="service__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {service.map((item) => (
            <div key={item.id} className="service__card p-6 bg-gray-100 rounded-lg">
              <span className="text-3xl text-yellow-600 mb-4 block">
                <i className={item.icon}></i>
              </span>
              <h6 className="mb-2">{item.title}</h6>
              <p className="text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
