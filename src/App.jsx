import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import AnimatedBackground from './components/AnimatedBackground';
import SpaceshipIntro from './components/SpaceshipIntro';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    document.title = "DHARANISH PORTFOLIO";
  }, []);

  return (
    <div className="bg-[#030014] min-h-screen selection:bg-accent-primary selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!introComplete && (
          <SpaceshipIntro key="intro" onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <AnimatedBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <ContactForm />
        </main>
      </motion.div>
    </div>
  );
}

export default App;
