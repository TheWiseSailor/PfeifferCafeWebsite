import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <div className='Carousel-title'>
      <h1>Customer Reviews!</h1>
      
    <div className="content-slider">
      <div className="slider">
        <div className="mask">
          <ul>
            <li className="anim1">
              <div className="quote">Hello, this is a quote from a person.</div>
              <div className="source">- Person</div>
            </li>
            <li className="anim2">
              <div className="quote">Hello, this is a quote from another person.</div>
              <div className="source">- Another person</div>
            </li>
            <li className="anim3">
              <div className="quote">Hello, this is a quote from an animal.</div>
              <div className="source">- Animal</div>
            </li>
            <li className="anim4">
              <div className="quote">Hello, this is a quote from a plant.</div>
              <div className="source">- Plant</div>
            </li>
            <li className="anim5">
              <div className="quote">How do ya like that.</div>
              <div className="source">- Cassidy</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
