import { Project, Skill, BlogPost } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://br.linkedin.com/in/davidserafim",
  facebook: "https://www.facebook.com/davi.develop",
  instagram: "https://www.instagram.com/davi.develop/",
  email: "mailto:hello@davi.design"
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NIGHT_SHIFT',
    category: 'Full Stack',
    description: 'Sistema de gestão de tarefas construído para devs que trabalham de madrugada. Modo escuro obrigatório.',
    imageUrl: 'https://picsum.photos/seed/nightshift/600/400',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    id: '2',
    title: 'GHOST_PROTOCOL',
    category: 'Cibersegurança',
    description: 'Dashboard automatizado de testes de penetração com relatórios em tempo real.',
    imageUrl: 'https://picsum.photos/seed/ghost/600/400',
    tech: ['Python', 'FastAPI', 'Next.js'],
    link: '#'
  },
  {
    id: '3',
    title: 'KAIZEN_FLOW',
    category: 'Produtividade',
    description: 'Rastreador de hábitos minimalista inspirado na filosofia japonesa de melhoria contínua.',
    imageUrl: 'https://picsum.photos/seed/kaizen/600/400',
    tech: ['React Native', 'Firebase'],
    link: '#'
  },
  {
    id: '4',
    title: 'LOFI_RADIO_API',
    category: 'Backend',
    description: 'Infraestrutura de serviço de streaming para beats lofi hip hop.',
    imageUrl: 'https://picsum.photos/seed/lofi/600/400',
    tech: ['NestJS', 'Redis', 'Docker'],
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Pentest / Hacking', level: 99, icon: 'HACK' },
  { name: 'JavaScript / TypeScript', level: 95, icon: 'JS' },
  { name: 'React / Next.js', level: 90, icon: 'RC' },
  { name: 'Node.js / Backend', level: 85, icon: 'ND' },
  { name: 'UI / UX Design', level: 75, icon: 'UX' },
  { name: 'Cat Lover', level: 100, icon: 'CAT' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'sql-injection-ghosts',
    title: 'SQL Injection: Sussurros no Banco de Dados',
    date: '2024-03-15',
    category: 'EXPL0IT',
    readTime: '5 min read',
    excerpt: 'Como uma simples aspa simples pode derrubar impérios digitais. Uma análise profunda sobre a vulnerabilidade mais clássica da web.',
    content: [
      "Imagine que você está em uma festa exclusiva. O segurança na porta pede seu nome. Você diz seu nome, mas adiciona um comando secreto logo depois. O segurança, sem treinamento adequado, obedece. Isso é SQL Injection.",
      "A vulnerabilidade ocorre quando dados fornecidos pelo usuário são concatenados diretamente em consultas SQL sem a devida sanitização. É como deixar a chave da porta da frente embaixo do tapete e esperar que ninguém olhe lá.",
      "Para mitigar isso, o uso de Prepared Statements ou ORMs modernos é obrigatório. Não confie no input do usuário. Nunca. Trate todo dado externo como uma ameaça biológica que precisa de quarentena antes de entrar no núcleo do seu sistema."
    ]
  },
  {
    id: 'xss-ghost-in-machine',
    title: 'XSS: Deixando Fantasmas na Máquina',
    date: '2024-04-02',
    category: 'PAYL0AD',
    readTime: '7 min read',
    excerpt: 'Cross-Site Scripting não é apenas sobre pop-ups de alerta. É sobre persistência, roubo de sessão e injeção de código malicioso no navegador da vítima.',
    content: [
      "O XSS (Cross-Site Scripting) permite que atacantes injetem scripts maliciosos em páginas web visualizadas por outros usuários. É a arte de fazer o navegador da vítima trabalhar para você.",
      "Existem três tipos principais: Stored (o mais perigoso, onde o script fica salvo no banco), Reflected (requer engenharia social) e DOM-based. Um ataque bem sucedido pode roubar cookies de sessão, tokens JWT ou até mesmo redirecionar o usuário para sites de phishing.",
      "A defesa? Content Security Policy (CSP) robusto e escaping de saída contextual. Frameworks como React já fazem um bom trabalho por padrão, mas o uso de 'dangerouslySetInnerHTML' abre portas que deveriam permanecer fechadas."
    ]
  }
];