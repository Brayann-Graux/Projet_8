import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_ww2our9', // Remplacez par votre ID de service EmailJS
        'template_nyg1yub', // Remplacez par votre ID de modèle EmailJS
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'b0mOGl7bZNvqosGIA' // Remplacez par votre ID utilisateur EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Votre message a été envoyé avec succès !');
          setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      );
  };

  return (
    <section id="contact" className="section">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Votre nom" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="tel" 
          name="phone"
          placeholder="Votre numéro de téléphone" 
          value={formData.phone}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Votre email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <input 
          type="text" 
          name="subject"
          placeholder="Sujet" 
          value={formData.subject}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="message"
          placeholder="Votre message" 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
