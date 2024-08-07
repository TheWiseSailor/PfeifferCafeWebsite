//https://workik.com/top-about-us-section-website-designs-with-html-css-and-javascript-code
// credits are for the above with preset layouts

import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="AboutUs-background">

    <div className="AboutUs-responsive-container-block AboutUs-bigContainer">
      <div className="AboutUs-responsive-container-block AboutUs-Container">
        <div className="AboutUs-responsive-container-block AboutUs-leftSide">
          <p className="AboutUs-text-blk AboutUs-heading">
            Meet Our Creative Team
          </p>
          <p className="AboutUs-text-blk AboutUs-subHeading">
            Semaj Africa is an online education platform that delivers video courses, programs and resources for Individual, Advertising & Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design.
          </p>
        </div>
        <div className="AboutUs-responsive-container-block AboutUs-rightSide">
          <img className="AboutUs-number1img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg" alt="Team member 1"/>
          <img className="AboutUs-number2img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png" alt="Team member 2"/>
          <img className="AboutUs-number3img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png" alt="Team member 3"/>
          <img className="AboutUs-number5img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png" alt="Customer support"/>
          <iframe allowFullScreen className="AboutUs-number4vid" poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png" src="https://www.youtube.com/embed/svg%3E?" title="Video"></iframe>
          <img className="AboutUs-number7img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png" alt="Team member 4"/>
          <img className="AboutUs-number6img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png" alt="Team member 5"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Aboutus;
