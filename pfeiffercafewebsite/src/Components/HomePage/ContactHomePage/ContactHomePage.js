import React from 'react';
import './ContactHomePage.css';
import { useForm, ValidationError } from '@formspree/react';
import AOSInitializer from "../../AOS/AOSInitializer";
function ContactHomePage() {
  const [state, handleSubmit] = useForm("balls");

  if (state.succeeded) {
    return <div className='SuccessMessageBackground'><p className='SuccessMessage'>Success!<br/> I will be in touch!</p></div>;
  }

  return (
    <div className="ContactHomePage-page-container">
             <AOSInitializer />
      <div className="info-section"data-aos="fade-down" data-aos-duration="3000">
        <h2>Get In Touch:</h2>
        <p>Pfeiffer Cafe is passionately committed to delivering delectable and mouth-watering cuisine to the vibrant community of uptown Shelby. We warmly invite you to reach out to us for more detailed information or to share your invaluable suggestions on how we can enhance our services to serve you better.
        </p>
      </div>
      <AOSInitializer />
      <div className="ContactHomePage-form-container-page" data-aos="fade-up" data-aos-duration="3000">
        <h2 className="ContactHomePageHeader-container-page">Contact</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
          />
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject of your message"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit" disabled={state.submitting} className="button-container-page">
            Submit
          </button>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <ContactHomePage />
  );
}

export default ContactHomePage;
