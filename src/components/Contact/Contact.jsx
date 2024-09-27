import React from 'react';
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contactez-moi</h2>
      <form>
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <input type="tel" placeholder="Votre numéro de téléphone" required />
        <textarea placeholder="Votre message" required></textarea>
        <button type="submit" className="btn">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
