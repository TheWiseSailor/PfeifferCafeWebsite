import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from './HeaderImages/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    setActiveLink(pathname.toLowerCase());

    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`HeaderPrimary ${scrolling ? 'hidden' : ''} ${activeLink.replace('/', '')}`}>
      <div className="container header">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Pfeiffer Cafe Logo" className="logo" />
          </Link>
        </div>
        <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className='nav-li'>
 
            </li>
            <li className='nav-li'>
              <Link
                to="/bakery"
                className={activeLink === '/bakery' ? 'active' : ''}
              >
                Bakery
              </Link>
            </li>
            <li className='nav-li'>
              <Link
                to="/gift-shop"
                className={activeLink === '/gift-shop' ? 'active' : ''}
              >
                Gift Shop
              </Link>
            </li>
            <li className='nav-li'>
              <Link
                to="/contact"
                className={activeLink === '/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} className='mobile-menu-icon MMI-icon' />
        </div>
      </div>
    </header>
  );
}

export default Header;
