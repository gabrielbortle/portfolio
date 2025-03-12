import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import './Hero.css';

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Gabe, a Web Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Specializing in Front-End Development and Creating User-Centered Designs
        </motion.p>
        <motion.button
          onClick={scrollToPortfolio} // Calls the smooth scroll function
          className="cta-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          View My Work
        </motion.button>

        {/* Social Media Icons */}
        <motion.div 
          className="social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
