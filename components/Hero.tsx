import React from 'react';
import GlitchText from './GlitchText';
import { Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  // Expanded Tech Stack
  const techStack = [
    'REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 
    'PYTHON', 'SQL', 'DOCKER', 'AWS', 'TAILWIND'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 border-b border-neutral-900 overflow-hidden">
      
      {/* Decorative Kanji Background - Low Opacity */}
      <div className="absolute top-20 right-10 text-9xl text-neutral-900 font-bold opacity-20 pointer-events-none select-none font-sans writing-vertical-rl">
        開発者
      </div>

      <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-24">
        
        {/* Left Column: Title & Identity */}
        <div className="flex flex-col gap-6 z-10">
            <div className="flex items-center gap-2 font-mono text-green-500 text-xs tracking-widest uppercase mb-2">
                <span className="w-2 h-2 bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                /// System.Status.Ready <span className="ml-2 text-green-800"> [ システム準備完了 ] </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-neutral-100">
                <GlitchText text="DAVI" className="block" jpText="ダビ" />
                <GlitchText text="SERAFIM" className="block text-neutral-500" jpText="セラフィム" />
            </h1>
            
            <div className="h-px w-24 bg-gradient-to-r from-green-500 to-transparent my-2"></div>

            <p className="font-mono text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl">
                <span className="text-green-500 mr-2">const</span>
                mission = <span className="text-yellow-200">"High Impact Solutions"</span>;
                <span className="ml-2 text-neutral-600 font-sans text-xs"> // ミッション</span>
                <br />
                <span className="text-neutral-400 block mt-2 leading-relaxed">
                   // Transformo conceitos complexos em software de alta performance. 
                   <br/>
                   // Especialista em arquiteturas escaláveis e experiências digitais imersivas que impulsionam negócios e retêm usuários.
                </span>
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
               {techStack.map(tech => (
                 <span key={tech} className="px-3 py-1 bg-neutral-900/50 border border-neutral-800 text-[10px] md:text-xs font-mono text-neutral-400 hover:border-green-500 hover:text-green-500 transition-all cursor-default hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:-translate-y-0.5">
                   {tech}
                 </span>
               ))}
            </div>
        </div>

        {/* Right Column: Code Editor Visual */}
        <div className="hidden lg:block relative group">
            {/* Japanese Floating Tag */}
            <div className="absolute -top-6 right-0 bg-red-600 text-black px-2 py-1 text-xs font-bold font-sans transform rotate-2 z-20">
                機密情報 (CONFIDENTIAL)
            </div>

            {/* Window Chrome */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-neutral-950 border border-neutral-800 rounded-lg overflow-hidden shadow-2xl font-mono text-xs md:text-sm">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <div className="text-neutral-500 text-xs flex items-center gap-2">
                        hero_component.tsx 
                        <span className="text-neutral-700 font-sans"> [ コード ] </span>
                    </div>
                    <div className="w-10"></div>
                </div>
                {/* Code Content */}
                <div className="p-6 text-neutral-400 overflow-hidden">
                    <div className="flex">
                        <div className="flex flex-col text-neutral-700 select-none pr-4 text-right border-r border-neutral-800 mr-4">
                            {Array.from({length: 12}).map((_, i) => <span key={i}>{i+1}</span>)}
                        </div>
                        <div className="flex flex-col gap-1">
                            <div><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;</div>
                            <div>&nbsp;</div>
                            <div><span className="text-purple-400">const</span> <span className="text-yellow-200">Portfolio</span> = () <span className="text-blue-400">=&gt;</span> {'{'}</div>
                            <div className="pl-4"><span className="text-purple-400">const</span> skills = [<span className="text-green-300">'Architecture'</span>, <span className="text-green-300">'Performance'</span>, <span className="text-green-300">'Scale'</span>];</div>
                            <div className="pl-4"><span className="text-purple-400">return</span> (</div>
                            <div className="pl-8 text-neutral-500">&lt;div className="cyberpunk-container"&gt;</div>
                            <div className="pl-12 text-neutral-500">&lt;h1&gt;Ola, Mundo&lt;/h1&gt;</div>
                            <div className="pl-12 text-neutral-500">&lt;Code /&gt;</div>
                            <div className="pl-12 text-neutral-500">&lt;Coffee /&gt;</div>
                            <div className="pl-8 text-neutral-500">&lt;/div&gt;</div>
                            <div className="pl-4">);</div>
                            <div>{'}'};</div>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center gap-2 text-green-500 animate-pulse">
                        <Terminal size={14} />
                        <span>Compiling...</span>
                        <span className="ml-auto font-sans text-xs">コンパイル中...</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 text-green-500">
        <span className="text-[10px] font-mono tracking-widest flex flex-col items-center gap-1">
            SCROLL
            <span className="text-[8px] font-sans">スクロール</span>
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;