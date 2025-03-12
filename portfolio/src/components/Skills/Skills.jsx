import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJsSquare, faReact, faWordpress, faShopify } from "@fortawesome/free-brands-svg-icons";
import { faUsers, faLightbulb, faComments, faTasks } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import "./Skills.css";

const skillVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 }, // Delay each item
  }),
};

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const technicalSkills = [
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3Alt, name: "CSS" },
    { icon: faJsSquare, name: "JavaScript" },
    { icon: faReact, name: "React" },
    { icon: faWordpress, name: "WordPress" },
    { icon: faShopify, name: "Shopify" },
  ];

  const softSkills = [
    { icon: faUsers, name: "Teamwork" },
    { icon: faLightbulb, name: "Problem-Solving" },
    { icon: faComments, name: "Communication" },
    { icon: faTasks, name: "Time Management" },
  ];

  return (
    <section id="skills" className="skills-container" ref={ref}>
      <h2>My Skills</h2>
      <div className="skills-grid">
        {/* Technical Skills - Slide in from the left */}
        <div className="skills-column">
          <h3>Technical Skills</h3>
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-box"
              custom={i}
              variants={skillVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills - Slide in from the right */}
        <div className="skills-column">
          <h3>Soft Skills</h3>
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-box"
              custom={i}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: (i) => ({
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.2, duration: 0.5 },
                }),
              }}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
