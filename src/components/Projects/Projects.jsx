import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Charger les données JSON depuis le fichier
  useEffect(() => {
    fetch('/assets/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Erreur lors du chargement des projets :', error));
  }, []);

  return (
    <section id="projects" className="section">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">Voir le projet</a>
            </div>
          ))
        ) : (
          <p>Chargement des projets...</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
