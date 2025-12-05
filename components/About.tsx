import React from 'react';
import { SKILLS, SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail, Cpu, Terminal, Shield, Wifi, Facebook, Instagram } from 'lucide-react';

const About: React.FC = () => {

  return (
    <section id="about" className="py-24 border-b border-neutral-900 bg-black relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
        <Cpu size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: ID Card Aesthetic */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-sm border border-neutral-800 bg-neutral-900/20 backdrop-blur-sm p-6 relative group hover:border-green-500/50 transition-colors">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-500"></div>

                <div className="flex items-start justify-between mb-6 border-b border-neutral-800 pb-4">
                    <div className="font-mono text-xs text-green-500 tracking-widest flex gap-2">
                        ID_CARD: 0X84F
                        <span className="text-neutral-600 font-sans">身分証明書</span>
                    </div>
                    <Wifi className="w-4 h-4 text-green-500 animate-pulse" />
                </div>

                <div className="flex gap-6 mb-6">
                    {/* Enlarged Photo */}
                    <div className="w-32 h-32 bg-neutral-800 overflow-hidden border border-neutral-700 grayscale contrast-125 relative shrink-0">
                         <img 
                            src="https://i.postimg.cc/sgnd7r7v/Screenshot-2025-11-26-at-17-45-34-(3)-Instagram.png" 
                            alt="Avatar" 
                            className="w-full h-full object-cover opacity-80"
                        />
                        {/* Pixelation effect overlay simulation */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4yKSIvPjwvc3ZnPg==')] opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-full bg-green-500/20 text-[8px] text-center text-green-500 font-mono">IMG_844.JPG</div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-1 font-mono text-xs">
                        <div className="text-neutral-500 flex items-center gap-1">
                            NOME: <span className="text-green-700 font-sans text-[10px]">名前</span>
                        </div>
                        <div className="text-white text-xl font-bold tracking-tight">DAVI.S</div>
                        
                        <div className="text-neutral-500 mt-3 flex items-center gap-1">
                            CLASSE: <span className="text-green-700 font-sans text-[10px]">クラス</span>
                        </div>
                        <div className="text-green-400 font-bold">TECH_WIZARD</div>

                        <div className="mt-2 inline-block px-2 py-1 bg-red-900/20 border border-red-900/50 text-red-500 text-[10px] rounded text-center">
                            A-RANK ADMIN
                        </div>
                    </div>
                </div>

                <div className="space-y-3 font-mono text-xs text-neutral-400">
                    <div className="flex justify-between border-b border-neutral-800/50 pb-1">
                        <span className="flex gap-1">LOCALIZAÇÃO <span className="text-neutral-700 font-sans">場所</span></span>
                        <span className="text-neutral-200">BRASIL [BR]</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800/50 pb-1">
                        <span className="flex gap-1">UPTIME <span className="text-neutral-700 font-sans">稼働時間</span></span>
                        <span className="text-neutral-200">99.9%</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800/50 pb-1">
                        <span className="flex gap-1">EXP <span className="text-neutral-700 font-sans">経験値</span></span>
                        <span className="text-neutral-200">SENIOR_LEVEL</span>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-center gap-6">
                     <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-green-500 transition-colors"><Github size={20} /></a>
                     <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                     <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                     <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
                     <a href={SOCIAL_LINKS.email} className="text-neutral-500 hover:text-red-500 transition-colors"><Mail size={20} /></a>
                </div>
            </div>
        </div>

        {/* Right: Technical Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-200 font-mono tracking-tighter flex flex-col md:flex-row md:items-center gap-2">
                        ESTATÍSTICAS_PERSONAGEM
                        <span className="text-sm text-green-800 font-sans font-normal opacity-70"> [ キャラクターステータス ] </span>
                    </h2>
                </div>
                <p className="text-neutral-500 font-mono text-sm max-w-lg">
                    Análise de proficiência técnica e arsenal de desenvolvimento. Dados atualizados em tempo real.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {SKILLS.map((skill) => (
                    <div key={skill.name} className="group">
                        <div className="flex justify-between font-mono text-xs mb-2">
                            <span className="text-neutral-300 group-hover:text-green-400 transition-colors flex items-center gap-2">
                                {'>'} {skill.name}
                            </span>
                            <span className="text-green-500 font-bold text-shadow-green">[{skill.level}%]</span>
                        </div>
                        <div className="h-2 w-full bg-neutral-900 border border-neutral-800 p-[1px]">
                            <div 
                                className="h-full bg-neutral-600 group-hover:bg-green-500 transition-all duration-700 relative overflow-hidden shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                                style={{ width: `${skill.level}%` }}
                            >
                                {/* Animated stripe inside bar */}
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-4 bg-neutral-900/30 border border-neutral-800 text-neutral-500 text-xs font-mono relative">
                <div className="absolute top-0 right-0 bg-neutral-800 px-2 text-[10px] text-neutral-400 font-sans">ログ (LOG)</div>
                <div className="flex gap-2 mb-2">
                    <Terminal size={14} className="text-yellow-500" />
                    <span className="text-yellow-500/80">latest_log.txt</span>
                </div>
                <div className="pl-4 border-l border-neutral-800 space-y-1">
                    <p>&gt; Inicializando módulos de UI...</p>
                    <p>&gt; Carregando dependências React... <span className="text-green-900 ml-2 font-sans">完了</span></p>
                    <p>&gt; Otimizando performance do servidor...</p>
                    <p className="text-green-500 animate-pulse">&gt; Sistema operacional e pronto para novos desafios.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;