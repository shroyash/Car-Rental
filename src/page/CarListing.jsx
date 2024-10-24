import React, { useState } from 'react';
import { carData } from '../assests/data/cardata';

const CarListing = () => {
  const [filterBrandModel, setFilterBrandModel] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  // Get unique car brands
  const uniqueCarBrands = carData.filter(
    (value, index, self) => self.findIndex(car => car.brand === value.brand) === index
  );

  const handleBrandChange = (e) => {
    const changeValue = e.target.value;
    setSelectedBrand(changeValue);
    setSelectedModel(''); // Reset model when brand changes

    // Filter the car models based on the selected brand
    const filteredData = carData.filter(car => car.brand === changeValue);
    setFilterBrandModel(filteredData);
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const filteredCarData = filterBrandModel.filter(car => 
    selectedModel ? car.model === selectedModel : true
  );

  return (
    <div>
      <div className="hot-offer container mx-auto my-20">
        <select onChange={handleBrandChange} value={selectedBrand} className="mb-4 p-2 mx-3 border rounded">
          <option value="">Select a brand</option>
          {uniqueCarBrands.map(car => (
            <option key={car.id} value={car.brand}>
              {car.brand}
            </option>
          ))}
        </select>

        <select name="carModel" id="carModel" className="mb-4 p-2 mx-3 border rounded" onChange={handleModelChange} value={selectedModel}>
          <option value="" disabled>Select model</option>
          {filterBrandModel.map((car, index) => (
            <option key={index} value={car.model}>{car.model}</option>
          ))}
        </select>

        <div className="car-listing grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Displaying filtered car listings */}
          {filteredCarData.length > 0 ? (
            filteredCarData.map((car, index) => (
              <div key={index} className="car-item p-4 border rounded-lg shadow-lg">
                <img 
                  src={car.imgUrl} 
                  alt={car.carName} 
                  className="w-full h-40 object-cover" 
                />
                <div className="car-info mt-4 text-center">
                  <h3 className="text-lg font-semibold">{car.carName}</h3>
                  <p className="text-primary font-bold mt-2">${car.price} / day</p>
                  <div className="btn flex justify-center space-x-4 mt-4">
                    <button className='bg-primary text-white text-xs px-4 py-2'>
                      Rent
                    </button>
                    <button className='bg-yellow-400 text-white text-xs px-4 py-2'>
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No cars available for the selected brand and model.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarListing;
