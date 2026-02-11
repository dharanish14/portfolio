import React, { Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-primary min-h-screen text-white selection:bg-accent selection:text-white overflow-x-hidden relative">
      <div className="radial-glow" />

      {/* Immersive Layers */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Experience */}
      <main className="relative z-10">
        <Suspense fallback={<div className="h-screen flex items-center justify-center font-orbitron animate-pulse">BOOTING SYSTEM...</div>}>
          <Hero />
          <div className="space-y-32">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-xl relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-orbitron tracking-widest text-sm text-white">DHARANISH</span>
          </div>

          <p className="text-text-secondary text-xs font-inter opacity-50 uppercase tracking-widest">
            &copy; 2026 DHARANISH. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-6">
            <a href="https://github.com/dharanish14" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors text-xs font-orbitron tracking-widest">GITHUB</a>
            <a href="https://www.linkedin.com/in/dharanish-cb" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors text-xs font-orbitron tracking-widest">LINKEDIN</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
