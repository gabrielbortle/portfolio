import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <h1 className="logo">Gabe's Portfolio</h1>

        {/* Mobile Menu Button */}
        <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile & Desktop Menu */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="hero" smooth={true} duration={500} offset={-70} onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} offset={-70} onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-70} onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-70} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
