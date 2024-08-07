import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomeRender from './Components/HomeRender';
import Contact from './Components/Contact/Contact';


const App = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/PfeifferCafeWebsite" element={<HomeRender />} />
        <Route path="/" element={<HomeRender />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer activePage={location.pathname} />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
