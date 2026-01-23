import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { Terminal, Send, XCircle, Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';

interface TerminalChatProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const TerminalChat: React.FC<TerminalChatProps> = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Sistema Online. Bem-vindo à Interface Serafim. Como posso ajudar?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add User Message
    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Simulate "Processing" Delay
    setTimeout(() => {
      const responseText = `Olá! Que bom ter você por aqui. Estou totalmente disponível para novos projetos e desafios. 🚀

Basta me contatar onde desejar! Clique nos links abaixo:`;
      
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: responseText,
        hasSocialLinks: true 
      }]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-neutral-900 border border-neutral-700 text-neutral-300 p-4 rounded-full shadow-lg hover:bg-neutral-800 transition-all duration-300 hover:scale-110 group"
          aria-label="Abrir Terminal"
        >
          <Terminal className="w-6 h-6 group-hover:text-green-400" />
        </button>
      )}

      {/* Terminal Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[500px] bg-neutral-950 border border-neutral-800 rounded-lg shadow-2xl z-50 flex flex-col font-mono text-sm overflow-hidden backdrop-blur-md bg-opacity-95">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-2 text-neutral-500 text-xs">davi_serafim_bot.exe</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-500 hover:text-red-400 transition-colors"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-md ${
                    msg.role === 'user' 
                      ? 'bg-neutral-800 text-neutral-200 border border-neutral-700' 
                      : 'bg-transparent text-green-500 border-l-2 border-green-500 pl-4'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap font-mono">
                    {msg.role === 'model' && <span className="mr-2 text-xs opacity-50">[BOT]</span>}
                    {msg.text}
                  </p>

                  {/* Social Links Row */}
                  {msg.hasSocialLinks && (
                    <div className="flex flex-wrap gap-5 mt-4 pt-3 border-t border-green-500/30">
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200" title="GitHub">
                            <Github size={20} />
                        </a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200" title="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors hover:scale-110 transform duration-200" title="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-200" title="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href={SOCIAL_LINKS.email} className="hover:text-red-400 transition-colors hover:scale-110 transform duration-200" title="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="text-green-500 animate-pulse text-xl pl-4 font-mono font-bold tracking-widest">
                  ...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-neutral-900/50 border-t border-neutral-800 flex gap-2">
            <span className="text-green-500 py-2">{'>'}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite um comando..."
              className="flex-1 bg-transparent border-none outline-none text-neutral-200 placeholder-neutral-600 font-mono"
              autoFocus
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="text-neutral-500 hover:text-green-400 disabled:opacity-50 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalChat;