import { Project, Skill } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://br.linkedin.com/in/davidserafi",
  facebook: "https://www.facebook.com/davi.develo",
  instagram: "https://www.instagram.com/davi.develo/",
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
  { name: 'JavaScript / TypeScript', level: 95, icon: 'JS' },
  { name: 'React / Next.js', level: 90, icon: 'RC' },
  { name: 'Node.js / Backend', level: 85, icon: 'ND' },
  { name: 'UI / UX Design', level: 75, icon: 'UX' },
];