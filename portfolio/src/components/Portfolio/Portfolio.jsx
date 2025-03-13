import React from 'react';
import './Portfolio.css';
import AlmaDesktop from '../../assets/almadesktop.png';
import TetonDesktop from '../../assets/tetondesktop.png';
import GabrielsDesktop from '../../assets/gabrielsphotodesktop.png';
import CoyosDesktop from '../../assets/coyosdesktop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    title: 'Alterations by Alma',
    image: AlmaDesktop,
    techStack: [faHtml5, faCss3Alt, faReact, faWordpress],
    description: 'A E-commerce website for a tailoring business built with HTML, CSS, React, and WordPress.',
    liveLink: 'https://alterationsbyalma.com',
  },
  {
    title: 'Coyos Drywall and Painting',
    image: CoyosDesktop,
    techStack: [faHtml5, faCss3Alt, faReact],
    description: 'A website for a drywall and painting company built with HTML, CSS, and React.',
    liveLink: 'https://coyosdrywallpainting.com',
  },
  {
    title: 'Teton Code',
    image: TetonDesktop,
    techStack: [faHtml5, faCss3Alt, faReact],
    description: 'A website for a web development company built with HTML, CSS, and React.',
    liveLink: 'https://tetoncode.com',
  },
  {
    title: 'Gabriel\'s Photo',
    image: GabrielsDesktop,
    techStack: [faHtml5, faCss3Alt, faReact],
    description: 'A photography portfolio built with HTML, CSS, and React.',
    liveLink: 'https://gabrielsphoto.com',
  },
];
const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.liveLink} 
                className="view-project-btn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <FontAwesomeIcon key={index} icon={tech} size="2x" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Portfolio;
