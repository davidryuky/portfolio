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
}
