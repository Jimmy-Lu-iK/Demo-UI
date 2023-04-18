import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './NavBar.css'

const Navbar = ({ links }) => {
  const [showLinks, setShowLinks] = useState(false);
  const navElement = useRef()
  const navMenu = useRef()

  useEffect(() => {
    const handler = (event) => {
      if(navElement.current && (!navElement.current.contains(event.target) || navMenu.current.contains(event.target))) {
        setShowLinks(false)
      }
    };
    
    document.addEventListener('click', handler, true)

    return () => {
        document.removeEventListener('click', handler)
    };
  }, [])

  return (
    <nav className="navbar" ref={navElement}>
      <Link to="/" className="navbar-logo">
        My Logo
      </Link>
      <div className="menu-icon" onClick={() => setShowLinks(!showLinks)}>
        {showLinks ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={showLinks ? "nav-menu active" : "nav-menu"} ref={navMenu}>
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <Link to={link.path} className="nav-links">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
