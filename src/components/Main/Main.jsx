import React from 'react';
import About from '../About/About';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import CodingProfiles from '../coding/Coding';
import Contact from '../Contact/Contact'

function Main() {
  return (
    <div className='container'>
     
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="coding-profiles">
        <CodingProfiles />
      </section>
       <section id="contact">
        <Contact/>
      </section>
      {/* Add more like this if needed */}
    </div>
  );
}

export default Main;
