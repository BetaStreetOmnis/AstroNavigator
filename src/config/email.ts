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

export const emailConfig = {
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
    name: 'BetaStreetOmnis',
    email: 'contact@example.com',
    logo: '/logo.png',
    website: 'https://example.com',
    address: 'Your Address',
    phone: '+1234567890'
  }
};