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

export const messageCategories: Category[] = [{name: "None", slug: "None", description: "None"}, {name: "政府", slug: "政府", description: "政府"}, {name: "其他", slug: "其他", description: "其他"}, {name: "互联网服务", slug: "互联网服务", description: "互联网服务"}, {name: "工程建设", slug: "工程建设", description: "工程建设"}, {name: "半导体", slug: "半导体", description: "半导体"}, {name: "贸易行业", slug: "贸易行业", description: "贸易行业"}, {name: "综合行业", slug: "综合行业", description: "综合行业"}];

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