import React from 'react';
import { PROJECTS } from '../constants';
import { Terminal, FolderOpen, ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projetos_deploy" className="py-24 border-b border-neutral-900 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 border-b border-neutral-800 pb-4 gap-2">
          <div className="flex items-center gap-4">
             <Terminal className="text-green-600 w-8 h-8 shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
             <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-200 break-words font-mono">
                  ./projetos_deploy
                </h2>
                <div className="text-xs font-mono text-green-500/80 mt-1 flex gap-2">
                    Indexando repositórios...
                    <span className="font-sans"> [ リポジトリ ] </span>
                </div>
             </div>
          </div>
          {/* Enhanced Visibility for Japanese Text */}
          <span className="font-sans text-green-900/40 md:text-green-500/20 text-xl md:text-3xl font-bold md:opacity-100 select-none drop-shadow-[0_0_2px_rgba(34,197,94,0.1)]">
            実行されたミッション
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="group border border-neutral-800 bg-neutral-900/40 hover:border-green-500/50 transition-all duration-300 flex flex-col overflow-hidden rounded-sm hover:shadow-[0_0_20px_rgba(0,255,0,0.05)]">
              
              {/* Window Header */}
              <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FolderOpen className="w-4 h-4 text-green-500" />
                    <span className="font-mono text-xs text-neutral-400 group-hover:text-green-400 transition-colors">root/projects/{project.title.toLowerCase()}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-green-900 font-sans group-hover:text-green-500 transition-colors">システム</span>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-green-500"></div>
                    </div>
                </div>
              </div>

              <div className="p-6 flex flex-col md:flex-row gap-6 h-full">
                
                {/* Tech Preview (Image) */}
                <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-black border border-neutral-800 relative overflow-hidden group-hover:border-green-500/20 transition-colors">
                    <div className="absolute inset-0 bg-green-500/10 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Scan line effect on image */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
                    
                    {/* Japanese Overlay on Image Hover */}
                    <div className="absolute bottom-2 right-2 text-green-500 font-sans text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        アクセス許可
                    </div>
                </div>

                {/* Project Details */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex items-baseline justify-between mb-2">
                            <h3 className="text-xl font-bold font-mono text-neutral-100 group-hover:text-green-400 transition-colors">
                                {project.title}
                            </h3>
                            <span className="text-[10px] text-green-500 border border-green-900 bg-green-900/20 px-2 py-0.5 rounded">
                                v1.0.{index}
                            </span>
                        </div>
                        
                        <p className="font-mono text-sm text-neutral-400 leading-relaxed mb-4 border-l-2 border-neutral-800 pl-3 group-hover:border-green-500/50 transition-colors">
                            {project.description}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-green-500/70 bg-green-500/5 px-2 py-1 rounded border border-green-500/10">
                                    <Code size={10} /> {t}
                                </span>
                            ))}
                        </div>
                        
                        <a href={project.link} className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 hover:text-black bg-neutral-800 hover:bg-green-500 px-4 py-2 w-full justify-center transition-all border border-transparent hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] group-hover:text-green-500 group-hover:hover:text-black">
                            ACESSAR REPOSITÓRIO <ExternalLink size={12} />
                        </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;