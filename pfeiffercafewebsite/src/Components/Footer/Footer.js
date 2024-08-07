// Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ activePage }) => {
  return (
    <footer className={`footer ${activePage.replace('/', '')}`}>
      <p> &copy; 2024 Pfeiffer Cafe & Confections |  All Rights Reserved</p>
    </footer>
  );
}

export default Footer;