import React from 'react';
import "./Navbar.scss";
import { Link } from 'react-scroll';

const Navbar = () => {
  const navItems = [
    { id: 'profile', label: 'Profil' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <ul>
        {navItems.map((item, index) => (
          <li key={item.id} data-aos="flip-left" data-aos-delay={index * 100}>
            <Link to={item.id} smooth={true} duration={500}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
