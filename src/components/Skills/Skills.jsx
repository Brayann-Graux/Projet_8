import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, 
    faCss3Alt, 
    faSass, 
    faJs, 
    faReact, 
    faNodeJs 
} from '@fortawesome/free-brands-svg-icons';
import { 
    faDatabase 
} from '@fortawesome/free-solid-svg-icons'; 
import './Skills.scss'; // Assurez-vous que vous avez un fichier SCSS pour les styles

const Skills = () => {
  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "SCSS", icon: faSass },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Node.js", icon: faNodeJs },
    { name: "MongoDB", icon: faDatabase },
    { name: "SQL", icon: faDatabase },
  ];

  return (
    <section id="skills" className="section">
      <h2>Les Compétences Acquises</h2>
      <ul className="skills-container">
        {skills.map((skill, index) => (
          <li key={index} className="skill-badge">
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <span className="skill-name">{skill.name}</span> {/* Nom affiché au-dessus de l'icône */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
