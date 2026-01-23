import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Terminal, Activity, Send } from 'lucide-react';

interface NavigationProps {
  onOpenTerminal: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenTerminal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent scrolling when menu is open & Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenTerminal();
    closeMenu();
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}>
      {/* Background with Glassmorphism and subtle gradient border */}
      <div className={`absolute inset-0 bg-neutral-950/80 backdrop-blur-md transition-all duration-500 border-b ${scrolled ? 'border-neutral-900/80' : 'border-transparent'}`}>
        {/* Animated Gradient Line at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative z-[101]">
        
        {/* Logo */}
        <a href="#" onClick={closeMenu} className="font-mono text-xl tracking-tighter font-bold text-neutral-100 flex items-center gap-3 group cursor-pointer select-none">
          <div className="relative">
            <div className={`w-2.5 h-2.5 bg-green-500 rounded-sm rotate-45 ${!isOpen ? 'animate-pulse' : ''} shadow-[0_0_10px_#22c55e]`}></div>
            <div className="absolute inset-0 border border-green-500/50 rounded-sm rotate-45 scale-150 animate-ping opacity-20"></div>
          </div>
          <span className="group-hover:text-green-400 transition-colors duration-300">DAVI.SERAFIM</span>
          <span className="text-[10px] text-neutral-600 border border-neutral-800 px-1.5 rounded font-sans tracking-wide group-hover:border-green-500/30 group-hover:text-green-500/50 transition-all ml-1 hidden sm:inline-block">
            DEV
          </span>
        </a>

        {/* Desktop Menu - Elegant & Colored */}
        <div className="hidden md:flex items-center gap-12 font-mono text-sm font-medium tracking-wide">
          
          {/* Perfil - Green Theme */}
          <a href="#about" className="group relative px-4 py-2 text-neutral-400 hover:text-green-400 transition-colors duration-300">
            <span className="absolute inset-0 bg-green-500/5 rounded-md scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
            <div className="relative flex items-center gap-2">
                <Activity size={16} className="text-neutral-600 group-hover:text-green-500 transition-colors duration-300" />
                <span>PERFIL</span>
            </div>
            <div className="absolute bottom-1 left-4 w-0 h-[1px] bg-green-500 group-hover:w-[calc(100%-32px)] transition-all duration-300 delay-75"></div>
          </a>

          {/* Projetos - Cyan Theme */}
          <a href="#projetos_deploy" className="group relative px-4 py-2 text-neutral-400 hover:text-cyan-400 transition-colors duration-300">
            <span className="absolute inset-0 bg-cyan-500/5 rounded-md scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
            <div className="relative flex items-center gap-2">
                <Terminal size={16} className="text-neutral-600 group-hover:text-cyan-500 transition-colors duration-300" />
                <span>PROJETOS</span>
            </div>
            <div className="absolute bottom-1 left-4 w-0 h-[1px] bg-cyan-500 group-hover:w-[calc(100%-32px)] transition-all duration-300 delay-75"></div>
          </a>

          {/* Contato - Red Theme */}
          <a href="#contact" onClick={handleContactClick} className="group relative px-4 py-2 text-neutral-400 hover:text-red-400 transition-colors duration-300 cursor-pointer">
            <span className="absolute inset-0 bg-red-500/5 rounded-md scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
            <div className="relative flex items-center gap-2">
                <Send size={16} className="text-neutral-600 group-hover:text-red-500 transition-colors duration-300" />
                <span>CONTATO</span>
            </div>
            <div className="absolute bottom-1 left-4 w-0 h-[1px] bg-red-500 group-hover:w-[calc(100%-32px)] transition-all duration-300 delay-75"></div>
          </a>

        </div>

        {/* Mobile Toggle Button */}
        <button 
            onClick={toggleMenu}
            className="md:hidden text-neutral-400 hover:text-green-500 transition-colors flex items-center gap-3 font-mono text-xs focus:outline-none p-2 active:scale-95 duration-150 relative z-[102] group"
            aria-label="Toggle Menu"
        >
            <span className="hidden sm:inline text-neutral-600 group-hover:text-green-600 font-sans text-[10px] font-bold tracking-widest transition-colors">
                {isOpen ? 'SHUTDOWN' : 'SYSTEM'}
            </span>
            <div className="p-1 border border-neutral-800 rounded bg-neutral-900 group-hover:border-green-500/50 transition-colors">
                 {isOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`
        md:hidden fixed inset-0 z-[100] flex flex-col pt-28 px-6 transition-all duration-500
        bg-black/95 backdrop-blur-xl
        ${isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4 pointer-events-none'}
      `}>
          {/* Subtle Grid Texture on top of the dark glass */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>

          {/* Menu Content Container */}
          <div className="flex flex-col h-full relative z-10">
            
            <div className="font-mono text-[10px] text-green-800 mb-8 border-b border-green-900/30 pb-4 uppercase tracking-widest flex justify-between items-center">
                <span>// Navigation_Module_v2.4</span>
                <span className="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
            </div>

            <div className="flex flex-col gap-4">
                <a href="#about" onClick={closeMenu} className="group flex items-center justify-between p-6 border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-green-500 transition-all duration-300 rounded-lg shadow-lg relative overflow-hidden backdrop-blur-sm">
                     {/* Hover Glow Effect */}
                     <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                     
                     <div className="flex items-center gap-4 relative z-10">
                        <Activity className="text-neutral-600 group-hover:text-green-500 transition-colors" size={20} />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-green-800 font-sans tracking-widest font-bold group-hover:text-green-600 transition-colors">// PROFILE</span>
                            <span className="text-xl font-bold text-neutral-300 group-hover:text-white transition-colors tracking-tight font-mono">PERFIL</span>
                        </div>
                     </div>
                     <ChevronRight className="text-neutral-700 group-hover:text-green-500 transition-transform group-hover:translate-x-1 relative z-10" size={20} />
                </a>
                
                <a href="#projetos_deploy" onClick={closeMenu} className="group flex items-center justify-between p-6 border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-cyan-500 transition-all duration-300 rounded-lg shadow-lg relative overflow-hidden backdrop-blur-sm">
                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>

                     <div className="flex items-center gap-4 relative z-10">
                        <Terminal className="text-neutral-600 group-hover:text-cyan-500 transition-colors" size={20} />
                        <div className="flex flex-col">
                             <span className="text-[10px] text-cyan-800 font-sans tracking-widest font-bold group-hover:text-cyan-600 transition-colors">// PROJECTS</span>
                            <span className="text-xl font-bold text-neutral-300 group-hover:text-white transition-colors tracking-tight font-mono">PROJETOS</span>
                        </div>
                     </div>
                     <ChevronRight className="text-neutral-700 group-hover:text-cyan-500 transition-transform group-hover:translate-x-1 relative z-10" size={20} />
                </a>
                
                <a href="#contact" onClick={handleContactClick} className="group flex items-center justify-between p-6 border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-red-500 transition-all duration-300 rounded-lg shadow-lg relative overflow-hidden backdrop-blur-sm">
                     <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>

                     <div className="flex items-center gap-4 relative z-10">
                        <Send className="text-neutral-600 group-hover:text-red-500 transition-colors" size={20} />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-red-800 font-sans tracking-widest font-bold group-hover:text-red-600 transition-colors">// CONTACT</span>
                            <span className="text-xl font-bold text-neutral-300 group-hover:text-white transition-colors tracking-tight font-mono">CONTATO</span>
                        </div>
                     </div>
                     <ChevronRight className="text-neutral-700 group-hover:text-red-500 transition-transform group-hover:translate-x-1 relative z-10" size={20} />
                </a>
            </div>

            {/* Mobile Footer Info / Stats */}
            <div className="mt-auto mb-8 border-t border-neutral-800 pt-6">
                <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-neutral-600">
                    <div className="bg-neutral-900/80 p-3 border border-neutral-800 rounded flex flex-col gap-1">
                        <span className="text-neutral-500">SERVER_TIME</span>
                        <span className="text-neutral-300">{new Date().toLocaleTimeString()}</span>
                    </div>
                    <div className="bg-neutral-900/80 p-3 border border-neutral-800 rounded flex flex-col gap-1">
                        <span className="text-neutral-500">SYSTEM_STATUS</span>
                        <span className="text-green-500 animate-pulse flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            OPERATIONAL
                        </span>
                    </div>
                </div>
                <div className="mt-6 text-center text-[10px] text-neutral-700 font-sans">
                    DESIGNED BY DAVI SERAFIM © {new Date().getFullYear()}
                </div>
            </div>

          </div>
      </div>
    </nav>
  );
};

export default Navigation;