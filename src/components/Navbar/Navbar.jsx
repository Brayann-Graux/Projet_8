import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 'profile', label: 'Profil' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      {/* Menu Burger */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Liens de navigation */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link to={item.id} smooth={true} duration={500} onClick={toggleMenu}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
