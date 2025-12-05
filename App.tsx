import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TerminalChat from './components/TerminalChat';

const App: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  
  // Easter egg console log
  useEffect(() => {
    console.log(
      "%c SYSTEM BOOT SEQUENCE INITIATED... \n WELCOME TO THE SERAFIM MAINFRAME. ",
      "background: #000; color: #00ff00; font-family: monospace; padding: 10px; font-size: 12px;"
    );
  }, []);

  const handleOpenTerminal = () => {
    setIsTerminalOpen(true);
  };

  return (
    <div className="relative bg-void text-ghost min-h-screen selection:bg-green-500/30 selection:text-green-100 font-sans">
      {/* Visual Overlay Effects */}
      <div className="bg-grid"></div>
      <div className="bg-noise"></div>
      <div className="scanlines"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation onOpenTerminal={handleOpenTerminal} />
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>

      {/* Interactive Elements */}
      <TerminalChat isOpen={isTerminalOpen} setIsOpen={setIsTerminalOpen} />
    </div>
  );
};

export default App;