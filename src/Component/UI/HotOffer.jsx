import React from 'react';
import { carData } from '../../assests/data/cardata'; // Corrected the path

const HotOffer = () => {
  return (
    <div>
      <div className="hot-offer container mx-auto mb-20 mt-10">
        <div className="main-heading text-primary text-center my-10">
          <h2>Hot Offers</h2>
        </div>
        <div className="car-listing grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {carData.map((car, index) => (
            <div key={index} className="car-item p-4 border rounded-lg shadow-lg">
              <img src={car.imgUrl} alt={car.carName} className="w-full h-40 object-cover" /> {/* Updated to car.imgUrl and car.carName */}
              <div className="car-info mt-4">
                <div className='car-detail text-center'>
                <h3 className="text-lg font-semibold">{car.carName}</h3>
                <p className="text-primary font-bold mt-2">${car.price} / day</p>
                <div className="btn flex space-x-0 ">
                    <button className='bg-primary text-white text-xs px-10 py-2'>Rent</button>
                    <button  className='bg-yellow-400 text-white text-xs px-10 py-2'>Details</button>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotOffer;
