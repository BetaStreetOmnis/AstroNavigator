import type { Category } from '../types';

export const blogCategories: Category[] = [
  { name: 'AI & Machine Learning', slug: 'ai-ml', description: 'Articles about artificial intelligence and machine learning' },
  { name: 'Data Science', slug: 'data-science', description: 'Data analysis and visualization' },
  { name: 'Web Development', slug: 'web-dev', description: 'Web technologies and development' },
  { name: 'Programming', slug: 'programming', description: 'General programming topics' },
];

export const linkCategories: Category[] = [
  { name: 'Development Tools', slug: 'dev-tools', description: 'Development tools and resources' },
  { name: 'AI Resources', slug: 'ai-resources', description: 'AI and ML resources' },
  { name: 'Learning Platforms', slug: 'learning', description: 'Educational platforms' },
  { name: 'Design Resources', slug: 'design', description: 'Design tools and inspiration' },
];

export const messageCategories: Category[] = [
  { name: 'AI News', slug: 'ai-news', description: 'Latest updates in artificial intelligence' },
  { name: 'Development Updates', slug: 'dev-updates', description: 'Development tools and technology updates' },
  { name: 'Data Science', slug: 'data-science', description: 'Data science and analytics news' },
  { name: 'Security Updates', slug: 'security', description: 'Security vulnerabilities and patch notifications' },
  { name: 'Cloud Computing', slug: 'cloud', description: 'Cloud services and infrastructure updates' }
];

export const companyCategories: Category[] = [
  {
    name: 'Manufacturing Companies',
    slug: 'manufacturing', 
    description: 'Various manufacturing enterprises'
  },
  {
    name: 'Technology Companies',
    slug: 'technology',
    description: 'Technology innovation companies'
  },
  {
    name: 'Service Companies',
    slug: 'service',
    description: 'Service-oriented enterprises'
  },
  {
    name: 'Research Institutions',
    slug: 'research',
    description: 'Research and development institutions'
  }
];