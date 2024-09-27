import React from 'react';
import "./Navbar.scss";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="profile" smooth={true} duration={500}>
            Profil
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Compétences
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projets
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
