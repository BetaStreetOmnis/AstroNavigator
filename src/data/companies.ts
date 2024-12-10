import type { Company } from '../types';

export const companies: Company[] = [
  {
    id: '1',
    name: 'RISING Novel Material',
    description: 'RISING significant products include water-based UV resin, polyurethane acrylate, acrylic resin, modified epoxy acrylic resin, specially modified polyester resin, etc. The annual production of each of these products can be as high as ten thousand tons...',
    history: 'Founded in 2005, RISING Novel Material is a leader in the research, design, manufacture, and marketing of environment-friendly new materials in China.',
    contact: {
      phone: '+86)769-83328989',
      email: 'resin@risingmaterials.com',
      address: 'Dongguan City, Guangdong Province'
    },
    industry: 'Manufacturing',
    category: 'manufacturing',
    website: 'https://www.risingmaterials.com/en/about-us.html',
    products: [
      'Water-based UV resin',
      'Polyurethane acrylate',
      'Acrylic resin',
      'Modified epoxy acrylic resin',
      'Specially modified polyester resin',
      'Urethane Acrylate',
      'Epoxy Acrylate',
      'Acrylate Resin',
      'Modified Polyester',
      'Waterborne urethane Acrylate',
      'Waterborne Acrylic Resin',
      'Monomer'
    ],
    tags: [
      { name: 'New Materials', color: 'blue' },
      { name: 'Eco-friendly Materials', color: 'green' },
      { name: 'R&D Manufacturing', color: 'purple' }
    ],
    certifications: ['ISO9001', 'ISO14001'],
    collaborations: [
      'Beijing University of Chemical Technology',
      'Guangdong Technion Israel Institute of Technology'
    ],
    patents: {
      count: 100,
      description: 'RISING boosts above 100 granted invitation and utility model patent certificates.'
    },
    researchTeam: {
      description: 'The company has established and cultivated several professional R & D technologists in the scientific research team.',
      highlights: [
        'World-class research technologists',
        'Technical consultants',
        'Design engineers',
        'Application engineers',
        'Technical workers',
        'QC teams'
      ]
    },
    news: [
      {
        date: new Date('2024-01-15'),
        title: 'Company Wins 2023 Innovation Enterprise Award',
        content: 'RISING Novel Material won the 2023 Innovation Enterprise Award for its outstanding contribution in the field of new materials.'
      },
      {
        date: new Date('2023-12-20'),
        title: 'Successfully Developed New Eco-friendly Resin',
        content: 'The company\'s R&D team successfully developed a new generation of water-based UV resin with better environmental performance and application effects.'
      },
      {
        date: new Date('2023-11-01'),
        title: 'Strategic Cooperation with Beijing University of Chemical Technology',
        content: 'The company signed a strategic cooperation agreement with Beijing University of Chemical Technology to jointly promote new material technology R&D and talent cultivation.'
      }
    ]
  },
  {
    id: '2',
    name: 'Google',
    description: 'Google is a multinational technology company that specializes in Internet-related services and products, including online advertising technologies, a search engine, cloud computing, software, and hardware.',
    history: 'Founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.',
    contact: {
      phone: '+1-650-253-0000',
      email: 'press@google.com',
      address: 'Mountain View, California, United States'
    },
    industry: 'Technology',
    category: 'technology',
    website: 'https://www.google.com',
    products: [
      'Google Search',
      'Gmail',
      'Google Maps',
      'Google Cloud',
      'Android',
      'Chrome',
      'YouTube',
      'Google Workspace'
    ],
    tags: [
      { name: 'AI & Machine Learning', color: 'blue' },
      { name: 'Cloud Computing', color: 'purple' },
      { name: 'Internet Services', color: 'green' }
    ],
    certifications: ['ISO27001', 'SOC 2', 'SOC 3'],
    collaborations: [
      'Stanford University',
      'MIT',
      'Various Research Institutions'
    ],
    patents: {
      count: 50000,
      description: 'Google holds tens of thousands of patents covering various aspects of technology and innovation.'
    },
    researchTeam: {
      description: 'Google employs thousands of researchers and engineers working on cutting-edge technology.',
      highlights: [
        'AI Researchers',
        'Software Engineers',
        'Data Scientists',
        'Product Designers',
        'Research Scientists'
      ]
    },
    news: [
      {
        date: new Date('2024-01-20'),
        title: 'Google Announces New AI Model',
        content: 'Google unveiled its latest AI model, pushing the boundaries of artificial intelligence capabilities.'
      }
    ]
  },
  {
    id: '3',
    name: 'Microsoft',
    description: 'Microsoft Corporation is a multinational technology corporation that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    history: 'Founded in 1975 by Bill Gates and Paul Allen, Microsoft has become one of the world\'s most valuable companies.',
    contact: {
      phone: '+1-425-882-8080',
      email: 'contact@microsoft.com',
      address: 'Redmond, Washington, United States'
    },
    industry: 'Technology',
    category: 'technology',
    website: 'https://www.microsoft.com',
    products: [
      'Windows',
      'Office 365',
      'Azure',
      'Xbox',
      'Surface',
      'Teams',
      'LinkedIn',
      'GitHub'
    ],
    tags: [
      { name: 'Cloud Computing', color: 'blue' },
      { name: 'Enterprise Software', color: 'purple' },
      { name: 'Gaming', color: 'green' }
    ],
    certifications: ['ISO27001', 'ISO9001', 'SOC 1', 'SOC 2'],
    collaborations: [
      'OpenAI',
      'Various Universities',
      'Enterprise Partners'
    ],
    patents: {
      count: 85000,
      description: 'Microsoft holds one of the largest patent portfolios in the technology industry.'
    },
    researchTeam: {
      description: 'Microsoft Research is a world-leading organization dedicated to advancing technology.',
      highlights: [
        'Software Engineers',
        'Cloud Architects',
        'AI Researchers',
        'Security Experts',
        'Gaming Developers'
      ]
    },
    news: [
      {
        date: new Date('2024-01-18'),
        title: 'Microsoft Expands AI Integration',
        content: 'Microsoft announces expanded AI integration across its product suite, enhancing user experience and productivity.'
      }
    ]
  }
];