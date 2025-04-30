import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  dialect: 'mysql',
  out: './drizzle/migrations',
  schema: './drizzle/schema.js',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },

  verbose: true,
  strict: true,
});

// import { defineConfig } from 'drizzle-kit';
// import dotenv from 'dotenv';

// dotenv.config();

// export default defineConfig({
//   dialect: 'mysql',
//   out: './drizzle/migrations',
//   schema: './drizzle/schema.js',
//   dbCredentials: {
//     url: process.env.DATABASE_URL || "mysql://digi5578_digitalpa_user:h4J%24%21%7Er6%29Pqr@localhost:3306/digi5578_digitalpa_db",
//   },

//   verbose: true,
//   strict: true,
// });
