import React from 'react';
import projectsData from '../../data/projects.json'; // Assure-toi que ton fichier JSON est bien importé
import './Projects.scss';  // Assure-toi d'importer le fichier CSS/SCSS

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <div className="project-details">
                <p>{project.description}</p>
                <p>Langages : {project.languages.join(', ')}</p>
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
            </div>
            <div className="project-name">{project.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
