export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tech: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
  hasSocialLinks?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[]; // Array of paragraphs
  readTime: string;
}