import React from 'react';
import Hero from './HomePage/Hero/Hero';
import Stripe from './AStripe/Stripe';
import ContactHomePage from './HomePage/ContactHomePage/ContactHomePage';
import Aboutus from './HomePage/AboutUs/Aboutus';
import CarouselComponent from './HomePage/Carousel/Carousel';

const HomeRender = () => {
  return (
    <div>
      <Hero />
   
      <Aboutus />  
       <CarouselComponent />
      <ContactHomePage />
      <Stripe />
    </div>
  );
}

export default HomeRender;
