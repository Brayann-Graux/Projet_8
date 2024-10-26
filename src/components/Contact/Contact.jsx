import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.scss";
import Swal from 'sweetalert2';

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

    // Validation des champs
    const { name, phone, email, subject, message } = formData;

    if (!name) {
      Swal.fire({
        icon: "error",
        title: "Erreur de saisie",
        text: "Veuillez entrer votre nom.",
        timer: 3000,
      });
      return;
    }

    if (!phone) {
      Swal.fire({
        icon: "error",
        title: "Erreur de saisie",
        text: "Veuillez entrer votre numéro de téléphone.",
        timer: 3000,
      });
      return;
    }

    // Vérifiez si l'email est au bon format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Erreur de saisie",
        text: "Veuillez entrer votre adresse e-mail.",
        timer: 3000,
      });
      return;
    } else if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Erreur de saisie",
        text: 'Veuillez inclure "@" dans l\'adresse e-mail.',
        timer: 3000,
      });
      return;
    }

    if (!subject) {
      Swal.fire({
        icon: "error",
        title: "Erreur de saisie",
        text: "Veuillez entrer le sujet.",
        timer: 3000,
      });
      return;
    }

    if (!message) {
      Swal.fire({
        icon: "error",
        title: "Erreur de saisie",
        text: "Veuillez entrer votre message.",
        timer: 3000,
      });
      return;
    }

    // Si toutes les validations passent, envoyez l'email
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
          console.log(result);
          Swal.fire({
            title: "Envoyé!",
            text: "Vous recevrez une réponse rapidement!",
            icon: "success",
            timer: 3000,
          });
          setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Une erreur s'est produite. Veuillez réessayer.",
            timer: 3000,
          });
        }
      );
  };

  return (
    <section id="contact" className="section">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit} noValidate>
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
