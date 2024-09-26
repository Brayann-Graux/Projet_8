import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Durée de l'animation (1 seconde)
      once: true,      // Les animations ne se jouent qu'une seule fois
    });
  }, []);

  return (
    <div className="App">
      {/* Conteneur global avec une largeur maximale */}
      <div className="container">
        <Navbar />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
