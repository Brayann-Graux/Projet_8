import React from 'react';
import projectsData from '../../data/projects.json';  // Importer les données JSON
import './Projects.scss';  // Importer les styles SCSS

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay={index * 300} // Ajout d'un délai plus long pour chaque projet
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Affichage de plusieurs langages sous forme de boutons */}
            <div className="project-languages">
              {project.languages.map((language, index) => (
                <span key={index} className="project-language">{language}</span>
              ))}
            </div>

            <img src={project.image} alt={project.title} className="project-image" />

            {/* Conteneur pour les boutons */}
            <div className="btn-container">
              {/* Bouton pour afficher le code sur GitHub, aligné à gauche */}
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                Voir le code sur GitHub
              </a>

              {/* Condition pour afficher le bouton "Voir le projet" seulement si projectLink est disponible */}
              {project.projectLink && (
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn">
                  Voir le projet
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
