```typescript
export interface EmailConfig {
  smtp: {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
  };
  company: {
    name: string;
    email: string;
    website: string;
    address: string;
    phone: string;
    logo: string;
  };
}

export const emailConfig: EmailConfig = {
  smtp: {
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password'
    }
  },
  company: {
    name: 'haomiaodata',
    email: 'ch824783054@gmail.com',
    website: 'https://haomiaodata.com',
    address: '123 Business Street, City, Country',
    phone: '+1 234 567 890',
    logo: '/company-logo.png'
  }
};
```