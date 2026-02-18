import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendFeedbackToSheet, sendWaitlistToSheet } from "./sheet";
import { insertFeedbackSchema, insertWaitlistSchema } from "@shared/schema";
import dotenv from "dotenv";
dotenv.config();

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Feedback endpoint — stores in app and forwards to sheet API if SHEET_FEEDBACK_URL is set
  app.post("/api/feedback", async (req, res) => {
    try {
      const parsed = insertFeedbackSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid feedback data", details: parsed.error.errors });
      }
      const feedback = await storage.createFeedback(parsed.data);
      console.log(parsed)
      await sendFeedbackToSheet({
        message: parsed.data.message,
        name: parsed.data.name,
        email: parsed.data.email,
      }).catch(() => {});
      return res.status(201).json(feedback);
    } catch (error) {
      console.error("Error creating feedback:", error);
      return res.status(500).json({ error: "Failed to submit feedback" });
    }
  });

  // Waitlist endpoint — stores in app and forwards to sheet API if SHEET_WAITLIST_URL is set
  app.post("/api/waitlist", async (req, res) => {
    try {
      const parsed = insertWaitlistSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid waitlist data", details: parsed.error.errors });
      }
      console.log(parsed)
      const entry = await storage.createWaitlistEntry(parsed.data);
      await sendWaitlistToSheet({
        name: parsed.data.name,
        email: parsed.data.email,
        profession: parsed.data.profession,
        phone: parsed.data.phone,
      }).catch(() => {});
      return res.status(201).json(entry);
    } catch (error) {
      console.error("Error creating waitlist entry:", error);
      return res.status(500).json({ error: "Failed to join waitlist" });
    }
  });

  return httpServer;
}