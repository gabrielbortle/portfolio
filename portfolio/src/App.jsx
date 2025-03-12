// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section>
        <Skills />
      </section>
      <section id="portfolio">
        {/* Your Portfolio Section */}
        <Portfolio />
      </section>
      <section id="about">
        {/* About Section */}
        <AboutMe />
      </section>
      <section id="contact">
        {/* Contact Section */}
        <Contact />
      </section>
    </div>
  );
};

export default App;
