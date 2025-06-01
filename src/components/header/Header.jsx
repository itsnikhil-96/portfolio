import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from 'react-icons/fa';
import { IoCubeOutline, IoNewspaper } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';
import { FaCode } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false); // New helper

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#001f3f', transition: 'all 0.3s ease' }}>
      <div className="container-fluid px-4 py-2">
        <a className="navbar-brand text-white fw-bold fs-4 m-0" href="#" style={{ padding: 0 }}>Polimetla Nikhil</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ transition: 'transform 0.3s ease' }}
        >
          <span className="navbar-toggler-icon" style={{ display: isOpen ? 'none' : 'inline-block' }}></span>
          <span style={{ color: 'white', fontSize: '1.5rem', display: isOpen ? 'inline-block' : 'none', transition: 'opacity 0.3s ease' }}>✕</span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link fs-5" href="#about" onClick={closeNavbar}><FaUser className='mb-1' /> About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#skills" onClick={closeNavbar}><FaCode className='mb-1' /> Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#projects" onClick={closeNavbar}><IoCubeOutline className='mb-1' /> Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#coding-profiles" onClick={closeNavbar}><FaCode className='mb-1' /> Coding Profiles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#contact" onClick={closeNavbar}><ImProfile className='mb-1' /> Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
