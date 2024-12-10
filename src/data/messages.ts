import type { Message } from '../types';

export const messages: Message[] = [
  {
    id: '1',
    title: 'GPT-4 Turbo Released',
    content: 'GPT-4 Turbo is now available with enhanced capabilities and lower latency',
    category: 'ai-news',
    date: new Date('2024-03-15'),
    important: true,
    tags: ['ai', 'gpt-4', 'machine-learning']
  },
  {
    id: '2',
    title: 'Web Development Update',
    content: 'Next.js 14 introduces revolutionary server components architecture',
    category: 'dev-updates', 
    date: new Date('2024-03-14'),
    important: false,
    tags: ['nextjs', 'react', 'web-dev']
  },
  {
    id: '3',
    title: 'Data Science Tool Update',
    content: 'Pandas 3.0 released with major performance improvements',
    category: 'data-science',
    date: new Date('2024-03-13'),
    important: true,
    tags: ['python', 'data-science', 'pandas']
  },
  {
    id: '4',
    title: 'Security Alert',
    content: 'Critical security patch available for Node.js LTS versions',
    category: 'security',
    date: new Date('2024-03-12'),
    important: true,
    tags: ['security', 'nodejs', 'patch']
  },
  {
    id: '5',
    title: 'Cloud Computing News',
    content: 'AWS announces new serverless computing features',
    category: 'cloud',
    date: new Date('2024-03-11'),
    important: false,
    tags: ['aws', 'cloud', 'serverless']
  }
];