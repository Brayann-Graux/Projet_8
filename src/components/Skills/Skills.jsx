import React from 'react';
import './Skills.scss';  // Assure-toi que tu as un fichier SCSS pour les styles

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL"
  ];

  return (
    <section id="skills" className="section">
      <h2>Les Compétences Acquises</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
