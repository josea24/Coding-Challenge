import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  environment: process.env.NODE_ENV || 'development',
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
}));
