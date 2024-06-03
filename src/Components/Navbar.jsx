import './styles/Navbar.css';
import { useState, useEffect } from 'react';
import yudanLogo from '../assets/img/YudanLogo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.addEventListener("scroll", function() {
    let nav = document.querySelector('nav');
    nav.classList.toggle("sticky", window.screenY)

  })

  return (
    <nav>
      <div className="navbar-logo">
        <img src={yudanLogo} alt="yudan logo" />
        <a href="">Yudan.</a>
      </div>
      <div className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
        <a href="#About">ABOUT</a>
        <a href="#Contact">EDUCATION</a>
        <a href="#Project">PROJECT</a>
        <a href="#Contact">CONTACT</a>
      </div>
      <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={handleToggle}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </button>
    </nav>
  );
}

export default Navbar;
