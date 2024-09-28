import React, { useState } from 'react';
import projectsData from '../../data/projects.json';
import './Projects.scss';

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleClick = (projectId) => {
    if (selectedProjectId === projectId) {
      setSelectedProjectId(null); // Ferme la carte si elle est déjà ouverte
    } else {
      setSelectedProjectId(projectId); // Ouvre la carte cliquée
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project-card ${selectedProjectId === project.id ? 'show' : ''}`}
            onClick={() => handleClick(project.id)}
          >
            <div className={`project-image-container ${selectedProjectId === project.id ? 'reduced' : 'full'}`}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>Afficher plus</p>
              </div>
            </div>

            {selectedProjectId === project.id && (
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-languages">
                  {project.languages.map((language, index) => (
                    <span key={index} className="project-language">
                      {language}
                    </span>
                  ))}
                </div>

                <div className="btn-container">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                    Voir le code sur GitHub
                  </a>

                  {project.projectLink && (
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn project-btn">
                      Voir le projet
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
