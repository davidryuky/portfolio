import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-neutral-900 text-center relative overflow-hidden">
        {/* Background Japanese Watermark */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[100px] font-sans font-bold text-neutral-900 opacity-20 pointer-events-none whitespace-nowrap z-0">
            未来はここにある
        </div>

      <div className="font-mono text-xs text-neutral-600 relative z-10">
        <p className="mb-2 hover:text-green-500 transition-colors cursor-default">DESIGN & CÓDIGO POR DAVI SERAFIM</p>
        <p className="opacity-50">© {new Date().getFullYear()} TODOS OS DIREITOS RESERVADOS.</p>
        <div className="mt-6 flex flex-col items-center gap-2">
            <span className="font-sans text-red-600 text-2xl font-bold animate-pulse drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]">
                終わり
            </span>
            <span className="text-[10px] tracking-widest text-red-900 uppercase">System Shutdown</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;