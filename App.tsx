import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TerminalChat from './components/TerminalChat';

const App: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  
  // Security Protocols & Easter Eggs
  useEffect(() => {
    // 1. Console Warning (Thematic)
    console.log(
      "%c ⚠️ SECURITY PROTOCOL ENGAGED ⚠️ \n\n UNAUTHORIZED ACCESS TO SOURCE CODE IS MONITORIED. \n SYSTEM INTEGRITY: 100% ",
      "background: #000; color: #a855f7; font-family: monospace; padding: 20px; font-size: 14px; border: 2px solid #a855f7;"
    );

    // 2. Disable Context Menu (Right Click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 3. Disable DevTools Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I (Inspector), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Selector)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenTerminal = () => {
    setIsTerminalOpen(true);
  };

  return (
    <div className="relative bg-void text-ghost min-h-screen selection:bg-purple-500/30 selection:text-purple-100 font-sans">
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