import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BookOpen, Calendar, Clock, ChevronRight, Hash, Terminal } from 'lucide-react';

const Blog: React.FC = () => {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const togglePost = (id: string) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <section className="pt-32 pb-24 min-h-screen bg-black relative">
       {/* Background Decoration */}
       <div className="absolute top-40 left-10 opacity-5 pointer-events-none select-none">
            <h1 className="text-9xl font-bold text-neutral-800 writing-vertical-rl font-sans">
                ブログ
            </h1>
       </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 border-b border-purple-900/30 pb-6">
             <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded">
                    <BookOpen className="text-purple-500 w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 font-mono tracking-tighter">
                    /var/log/notes
                </h2>
             </div>
             <p className="text-purple-400/60 font-mono text-sm max-w-xl pl-1">
                // Descobertas, vulnerabilidades e anotações do submundo digital.
             </p>
        </div>

        {/* Post List */}
        <div className="space-y-8">
            {BLOG_POSTS.map((post) => (
                <article 
                    key={post.id} 
                    className={`
                        border transition-all duration-500 overflow-hidden relative group
                        ${expandedPost === post.id 
                            ? 'bg-neutral-900/50 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.1)] rounded-lg' 
                            : 'bg-neutral-950/30 border-neutral-800 hover:border-purple-500/50 rounded-sm'
                        }
                    `}
                >
                    {/* Header Clickable Area */}
                    <div 
                        onClick={() => togglePost(post.id)}
                        className="p-6 md:p-8 cursor-pointer relative z-10"
                    >
                         <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 text-xs font-mono text-neutral-500">
                             <div className="flex items-center gap-2">
                                <Calendar size={12} className="text-purple-500" />
                                <span>{post.date}</span>
                             </div>
                             <div className="flex items-center gap-2">
                                <Clock size={12} className="text-purple-500" />
                                <span>{post.readTime}</span>
                             </div>
                             <div className="flex items-center gap-2 px-2 py-0.5 bg-purple-900/20 border border-purple-900/50 rounded text-purple-400">
                                <Hash size={10} />
                                <span>{post.category}</span>
                             </div>
                         </div>

                         <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors ${expandedPost === post.id ? 'text-purple-400' : 'text-neutral-200 group-hover:text-purple-300'}`}>
                                    {post.title}
                                </h3>
                                {!expandedPost && (
                                    <p className="text-neutral-400 font-mono text-sm leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                            <ChevronRight 
                                className={`text-neutral-600 transition-transform duration-300 ${expandedPost === post.id ? 'rotate-90 text-purple-500' : 'group-hover:text-purple-500'}`} 
                            />
                         </div>
                    </div>

                    {/* Expanded Content */}
                    <div 
                        className={`
                            px-6 md:px-8 pb-8 transition-all duration-500 ease-in-out
                            ${expandedPost === post.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                        `}
                    >
                        <div className="h-px w-full bg-gradient-to-r from-purple-500/50 to-transparent mb-6"></div>
                        
                        <div className="font-mono text-sm md:text-base text-neutral-300 space-y-4 leading-relaxed">
                            {post.content.map((paragraph, idx) => (
                                <p key={idx} className={idx === 0 ? "first-letter:text-3xl first-letter:text-purple-500 first-letter:font-bold first-letter:float-left first-letter:mr-2" : ""}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-xs font-mono text-neutral-600 border-t border-neutral-800 pt-4">
                            <Terminal size={12} />
                            <span>END_OF_FILE</span>
                            <span className="ml-auto opacity-50">SHA256: 8f4b...2a9c</span>
                        </div>
                    </div>

                    {/* Decorative Corner lines for selected state */}
                    {expandedPost === post.id && (
                        <>
                            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-500"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-500"></div>
                        </>
                    )}
                </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;