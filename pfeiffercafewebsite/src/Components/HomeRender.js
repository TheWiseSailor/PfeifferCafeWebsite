import React from 'react';
import Hero from './HomePage/Hero/Hero';

import ContactHomePage from './HomePage/ContactHomePage/ContactHomePage';
import Aboutus from './HomePage/AboutUs/Aboutus';
import CarouselComponent from './HomePage/Carousel/Carousel';
import Maps from './HomePage/Maps/Maps';
const HomeRender = () => {
  return (
    <div>
      <Hero />

      <Aboutus />  
       <CarouselComponent />
      <ContactHomePage />
      <Maps/>
    </div>
  );
}

export default HomeRender;
