import React from 'react';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#profile">Profil</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
