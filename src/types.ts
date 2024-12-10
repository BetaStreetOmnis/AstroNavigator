export interface Category {
  name: string;
  slug: string;
  description?: string;
}

export interface Link {
  title: string;
  url: string;
  description: string;
  category: string;
}

export interface Message {
  id: string;
  title: string;
  content: string;
  category: string;
  date: Date;
  important: boolean;
  tags: string[];
}

export interface Tag {
  name: string;
  color: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  history?: string;
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  industry?: string;
  category?: string;
  website?: string;
  products?: string[];
  tags: Array<{
    name: string;
    color: string;
  }>;
  certifications?: string[];
  collaborations?: string[];
  patents?: {
    count: number;
    description: string;
  };
  researchTeam?: {
    description: string;
    highlights: string[];
  };
  news?: Array<{
    date: Date;
    title: string;
    content: string;
  }>;
}