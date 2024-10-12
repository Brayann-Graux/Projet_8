import React, { useState } from 'react';
import projectsData from '../../data/projects.json'; // Assure-toi que ton fichier JSON est bien importé
import './Projects.scss';  // Assure-toi d'importer le fichier CSS/SCSS

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null); // État pour suivre quel projet est actuellement ouvert

  // Fonction pour gérer le clic sur une carte
  const toggleProject = (projectId) => {
    if (activeProject === projectId) {
      setActiveProject(null); // Si la carte est déjà ouverte, on la ferme
    } else {
      setActiveProject(projectId); // Ouvrir la carte cliquée
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${activeProject === project.id ? 'active' : ''}`} 
            onClick={() => toggleProject(project.id)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              {activeProject === project.id && (
                <div className="project-details">
                  <p>{project.description}</p>
                  <div className="btn-container">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                      Voir le code sur GitHub
                    </a>
                    {project.projectLink && (
                      <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn">
                        Voir le projet
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
