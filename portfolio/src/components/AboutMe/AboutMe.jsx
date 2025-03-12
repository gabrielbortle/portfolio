import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";
import profilePic from "../../assets/me.jpg"; // Replace with your image path

const AboutMe = () => {
  return (
    <motion.section
      className="about-me"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% of section is in view
    >
      <div className="about-me-container">
        <div className="about-me-image">
          <img src={profilePic} alt="Gabe" />
        </div>
        <div className="about-me-content">
          <h2>
            About Me <br />
            <span>Web Developer</span>
          </h2>
          <p>
            Hey, I’m Gabe, a passionate web developer focused on crafting
            high-performing, sleek, and user-friendly websites. With expertise
            in front-end and full-stack development, I specialize in building
            responsive and interactive web applications that leave a lasting
            impression.
          </p>
          <p>
            I thrive on learning and refining my skills—exploring new
            frameworks, optimizing website performance, and improving user
            experience. My goal is to create digital experiences that not only
            look great but also function seamlessly across all devices.
          </p>
          <p>
            Outside of coding, I’m always expanding my knowledge, whether it's
            staying up-to-date with industry trends or working on personal
            projects to push my creativity further.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
