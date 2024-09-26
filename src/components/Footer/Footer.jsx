import React from 'react';
import './Footer.scss'; // Importez les styles du footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Brayann Graux. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
