import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import * as schema from './schema.js';
import * as relations from './relations.js';
dotenv.config();

const poolConnection = mysql.createPool(process.env.DATABASE_URL);
export const db = drizzle(poolConnection,{ schema : {...schema, ...relations},mode:"default" });

