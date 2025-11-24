import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open to improve mobile UX
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
      {/* Background of the Navbar itself (Top Strip) */}
      <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-[101]">
        
        {/* Logo */}
        <a href="#" onClick={closeMenu} className="font-mono text-xl tracking-tighter font-bold text-neutral-100 flex items-center gap-2 group cursor-pointer select-none">
          <div className={`w-2 h-2 bg-green-500 rounded-full ${!isOpen ? 'animate-pulse' : ''} shadow-[0_0_8px_#22c55e]`}></div>
          DAVI.SERAFIM
          <span className="text-xs text-green-700 opacity-0 group-hover:opacity-100 transition-opacity font-sans ml-1 hidden sm:inline-block">システム</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-widest text-neutral-500">
          <a href="#about" className="group flex flex-col items-center hover:text-neutral-100 transition-colors relative">
            <span>01. Perfil</span>
            <span className="absolute -bottom-3 text-[9px] text-green-600 opacity-0 group-hover:opacity-100 transition-all font-sans">プロフィール</span>
          </a>
          <a href="#projects" className="group flex flex-col items-center hover:text-neutral-100 transition-colors relative">
            <span>02. Missões</span>
            <span className="absolute -bottom-3 text-[9px] text-cyan-600 opacity-0 group-hover:opacity-100 transition-all font-sans">ミッション</span>
          </a>
          <a href="#contact" className="group flex flex-col items-center hover:text-neutral-100 transition-colors relative">
            <span>03. Contato</span>
            <span className="absolute -bottom-3 text-[9px] text-red-600 opacity-0 group-hover:opacity-100 transition-all font-sans">コンタクト</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
            onClick={toggleMenu}
            className="md:hidden text-neutral-400 hover:text-green-500 transition-colors flex items-center gap-2 font-mono text-xs focus:outline-none p-2 active:scale-95 duration-150 relative z-[102]"
            aria-label="Toggle Menu"
        >
            <span className="text-green-600 font-sans text-[10px] font-bold tracking-widest">
                {isOpen ? 'CLOSE' : 'MENU'}
            </span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`
        md:hidden fixed inset-0 z-[100] flex flex-col pt-24 px-6 transition-all duration-300
        bg-black/95 backdrop-blur-xl
        ${isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4 pointer-events-none'}
      `}>
          {/* Subtle Grid Texture on top of the dark glass */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none"></div>

          {/* Menu Content Container */}
          <div className="flex flex-col h-full relative z-10">
            
            <div className="font-mono text-[10px] text-green-800 mb-6 border-b border-green-900/30 pb-2 uppercase tracking-widest flex justify-between items-center">
                <span>// System_Navigation_Module_v2.0</span>
                <span className="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
            </div>

            <div className="flex flex-col gap-3">
                <a href="#about" onClick={closeMenu} className="group flex items-center justify-between p-5 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 hover:border-green-500 transition-all duration-300 rounded-sm shadow-lg relative overflow-hidden backdrop-blur-sm">
                     {/* Hover Glow Effect */}
                     <div className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                     
                     <div className="flex flex-col gap-1 relative z-10">
                        <span className="text-xs text-green-700 font-sans tracking-widest font-bold">01 // プロフィール</span>
                        <span className="text-2xl font-bold text-neutral-200 group-hover:text-green-400 transition-colors tracking-tighter font-mono">PERFIL</span>
                     </div>
                     <ChevronRight className="text-neutral-600 group-hover:text-green-500 transition-transform group-hover:translate-x-1 relative z-10" size={24} />
                </a>
                
                <a href="#projects" onClick={closeMenu} className="group flex items-center justify-between p-5 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 hover:border-cyan-500 transition-all duration-300 rounded-sm shadow-lg relative overflow-hidden backdrop-blur-sm">
                     <div className="absolute inset-0 bg-cyan-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>

                     <div className="flex flex-col gap-1 relative z-10">
                        <span className="text-xs text-cyan-700 font-sans tracking-widest font-bold">02 // ミッション</span>
                        <span className="text-2xl font-bold text-neutral-200 group-hover:text-cyan-400 transition-colors tracking-tighter font-mono">MISSÕES</span>
                     </div>
                     <ChevronRight className="text-neutral-600 group-hover:text-cyan-500 transition-transform group-hover:translate-x-1 relative z-10" size={24} />
                </a>
                
                <a href="#contact" onClick={closeMenu} className="group flex items-center justify-between p-5 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 hover:border-red-500 transition-all duration-300 rounded-sm shadow-lg relative overflow-hidden backdrop-blur-sm">
                     <div className="absolute inset-0 bg-red-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>

                     <div className="flex flex-col gap-1 relative z-10">
                        <span className="text-xs text-red-800 font-sans tracking-widest font-bold">03 // コンタクト</span>
                        <span className="text-2xl font-bold text-neutral-200 group-hover:text-red-400 transition-colors tracking-tighter font-mono">CONTATO</span>
                     </div>
                     <ChevronRight className="text-neutral-600 group-hover:text-red-500 transition-transform group-hover:translate-x-1 relative z-10" size={24} />
                </a>
            </div>

            {/* Mobile Footer Info / Stats */}
            <div className="mt-auto mb-8 border-t border-neutral-800 pt-6">
                <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-neutral-600">
                    <div className="bg-neutral-900/80 p-3 border border-neutral-800 flex flex-col gap-1">
                        <span className="text-neutral-500">LOCATION</span>
                        <span className="text-neutral-300">UNKNOWN_SERVER</span>
                    </div>
                    <div className="bg-neutral-900/80 p-3 border border-neutral-800 flex flex-col gap-1">
                        <span className="text-neutral-500">STATUS</span>
                        <span className="text-green-500 animate-pulse">ONLINE</span>
                    </div>
                </div>
                <div className="mt-6 text-center text-[10px] text-neutral-700 font-sans">
                    DAVI SERAFIM © {new Date().getFullYear()}
                </div>
            </div>

          </div>
      </div>
    </nav>
  );
};

export default Navigation;