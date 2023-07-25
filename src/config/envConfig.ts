import * as dotenv from 'dotenv';
dotenv.config();

export interface EnvironmentConfig {
  SERVER_PORT: number;
  DB_URL: string;
  DB_HOST: string;
}

export const environmentConfig: EnvironmentConfig = {
  SERVER_PORT: process.env.serverPort ? parseInt(process.env.serverPort, 10) : 3000,
  DB_URL: process.env.DbUrl || 'mongodb://localhost:27017/mydatabase',
  DB_HOST: process.env.emailHost || 'localhost',
};