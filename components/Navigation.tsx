import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-xl tracking-tighter font-bold text-neutral-100 flex items-center gap-2 group cursor-pointer">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
          DAVI.SERAFIM
          <span className="text-xs text-green-700 opacity-0 group-hover:opacity-100 transition-opacity font-sans ml-1">システム</span>
        </div>
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
        <div className="md:hidden text-xs text-neutral-500 font-mono flex gap-2">
            <span className="text-red-500">メニュー</span>
            MENU
        </div>
      </div>
    </nav>
  );
};

export default Navigation;