import React from 'react';
import "./Profile.scss";
import img_profil from "../../images/mon-image-de-profil.jpg";

const Profile = () => {
  return (
    <section id="profile" className="section profile-section">
      <div className="profile-content">
        {/* Utiliser l'image importée */}
        <img src={img_profil} alt="Brayann" className="profile-image" />

        <div className="profile-text">
          <div className="profile-header">
            <h1>Brayann Graux</h1>
            {/* Bouton pour télécharger le CV */}
            <a href="/files/cv-brayann-graux.pdf" download="Brayann-Graux-CV.pdf" className="btn-download-cv">
              Télécharger mon CV
            </a>
          </div>
          <p>
            Développeur Web Full-Stack passionné par la création de solutions modernes et élégantes, 
            mais également passionné de photographie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
