import { mysqlTable, varchar, mysqlEnum, json, timestamp, boolean, text } from 'drizzle-orm/mysql-core';
import { v4 as uuidv4 } from 'uuid';

// Enums
export const userStatusEnum = mysqlEnum('user_status', ['Draft', 'Active', 'NonActive']);
export const blogStatusEnum = mysqlEnum('blog_status', ['Published', 'Archived', 'Draft']);

export const user = mysqlTable('user', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => uuidv4()),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  status: userStatusEnum.notNull(),
  refreshToken: text('refresh_token'),
  role: varchar('role', { length: 50 }).notNull(),
  features: json('features').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const blogCategory = mysqlTable('blog_category', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => uuidv4()),
  name: varchar('name', { length: 255 }).notNull().unique(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  status: boolean('status').notNull(),
});

export const blog = mysqlTable('blog', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => uuidv4()),
  title: varchar('title', { length: 255 }).notNull(),
  image: text('image').notNull(),
  pdf: text('pdf'),
  content: text('content').notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  status: blogStatusEnum.notNull(),
  favorite: boolean('favorite').notNull(),
  categoryId: varchar('category_id', { length: 36 })
    .notNull()
    .references(() => blogCategory.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  publishDate: timestamp('publish_date').default(null), // ⬅️ default NULL
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  userId: varchar('user_id', { length: 36 })
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
});


export const lead = mysqlTable('lead', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => uuidv4()),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }).notNull(),
  business: varchar('business', { length: 255 }).notNull(),
  message: text('message'),
  companyName: varchar('company_name', { length: 255 }).notNull(),
  companyWebsite: varchar('company_website', { length: 255 }),
  from: varchar('from', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  isAgree: boolean('is_agree').default(true), //setelah migrate akan di ubah menjadi not null
});