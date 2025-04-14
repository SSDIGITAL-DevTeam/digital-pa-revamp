import { mysqlTable, varchar, mysqlEnum, json, timestamp, boolean, text } from 'drizzle-orm/mysql-core';
import { v4 as uuidv4 } from 'uuid';
import { relations } from "drizzle-orm";

// Enums
export const planStatusEnum = mysqlEnum('plan_status', ['Draft', 'Active', 'NonActive']);
export const blogStatusEnum = mysqlEnum('blog_status', ['Published', 'Archived', 'Draft']);

export const user = mysqlTable('user', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => uuidv4()),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  status: planStatusEnum.notNull(),
  refreshToken: text('refresh_token'),
  role: varchar('role', { length: 50 }).notNull(),
  features: json('features').notNull(),
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
  content: text('content').notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  status: blogStatusEnum.notNull(),
  favorite: boolean('favorite').notNull(),
  categoryId: varchar('category_id', { length: 36 })
    .notNull()
    .references(() => blogCategory.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  userId: varchar('user_id', { length: 36 })
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
});


export const order = mysqlTable('order', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => uuidv4()),
  amount: text('amount').notNull(),
  bussiness: varchar('bussiness', { length: 255 }).notNull(),
  date: varchar('date', { length: 50 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  message: text('message').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 50 }).notNull(),
  time: varchar('time', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const blogRelations = relations(blog, ({ one }) => ({
  blogCategory: one(blogCategory, {
    fields: [blog.categoryId],
    references: [blogCategory.id],
  }),
  user: one(user, {
    fields: [blog.userId],
    references: [user.id],
  }),
}));
