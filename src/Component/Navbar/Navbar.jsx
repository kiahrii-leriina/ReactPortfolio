import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import close from '../../assets/cross.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if menu is open

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <img src={logo} alt="Logo" />
        <img 
          src="./images/list.png" 
          alt="menu" 
          className='manuopen' 
          onClick={toggleMenu} 
        />
        <ul className="navmenu">
          <li><AnchorLink className='anchor' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
          <li><AnchorLink className='anchor' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
          <li><AnchorLink className='anchor' offset={50} href='#service'><p onClick={() => setMenu("service")}>Services</p></AnchorLink></li>
          <li><AnchorLink className='anchor' offset={50} href='#work'><p onClick={() => setMenu("work")}>Work</p></AnchorLink></li>
          <li><AnchorLink className='anchor' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="navconnect">
          <AnchorLink className='anchor' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Connect with me</p>
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
