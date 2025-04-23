import { relations } from "drizzle-orm";
import { blog, blogCategory, user } from "./schema.js";

// Relasi untuk blogCategory → blog
export const blogCategoryRelations = relations(blogCategory, ({ many }) => ({
  blogs: many(blog), // blog.categoryId → blogCategory.id
}));

// Relasi untuk user → blog
export const userRelations = relations(user, ({ many }) => ({
  blogs: many(blog), // blog.userId → user.id
}));

// Relasi untuk blog → blogCategory dan user
export const blogRelations = relations(blog, ({ one }) => ({
  category: one(blogCategory, {
    fields: [blog.categoryId],
    references: [blogCategory.id],
  }),
  author: one(user, {
    fields: [blog.userId],
    references: [user.id],
  }),
}));
