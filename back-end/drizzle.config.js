import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  dialect: 'mysql',
  out: './drizzle/migrations',
  schema: './drizzle/schema.js',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'mysql://root:@localhost:3306/drizzle_test',
  },

  verbose: true,
  strict: true,
});
