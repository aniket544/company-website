import React from 'react';
import './FlowingMenu.css';

const images = [
  './images/tt67.png',
  // './images/tt4.jpg',
  // './images/tt3.jpg',
  // './images/tt2.jpeg',
  './images/GEM_CPPP.png',
  './images/GEM.png',
  './images/DPIIT_.png',
  // './images/GEM_IREPS.png',
  ];

const FlowingMenu = () => {
  return (
    <div className="slideri-containeri">
      <div className="slideri">
        {images.map((image, index) => (
          <div key={index} className="slidei">
            <img src={image} alt={`Slidei ${index + 1}`} />
          </div>
        ))}
        {/* Duplicate images for seamless looping */}
        {images.map((image, index) => (
          <div key={`duplicate-${index}`} className="slidei">
            <img src={image} alt={`Slidei ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowingMenu;