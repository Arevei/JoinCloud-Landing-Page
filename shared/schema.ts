import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Feedback schema for open feedback section
export const feedbackSchema = z.object({
  id: z.string().optional(),
  message: z.string().min(1, "Feedback message is required"),
  name: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  createdAt: z.string().optional(),
});

export const insertFeedbackSchema = feedbackSchema.omit({ id: true, createdAt: true });

export type Feedback = z.infer<typeof feedbackSchema>;
export type InsertFeedback = z.infer<typeof insertFeedbackSchema>;

export const waitlistSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  profession: z.enum(["Student", "Creator", "Working Professional", "Video Editor", "Other"]),
  phone: z.string().optional(),
  createdAt: z.string().optional(),
});

export const insertWaitlistSchema = waitlistSchema.omit({ id: true, createdAt: true });

export type WaitlistEntry = z.infer<typeof waitlistSchema>;
export type InsertWaitlistEntry = z.infer<typeof insertWaitlistSchema>;