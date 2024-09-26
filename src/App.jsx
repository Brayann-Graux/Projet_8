import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'; // Import du pied de page


const App = () => {
  return (
    <div className="App">
      {/* Ajoute le container pour limiter la largeur */}
      <div className="container"></div>
      <Navbar />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> {/* Ajout du pied de page */}
    </div>
  );
};

export default App;