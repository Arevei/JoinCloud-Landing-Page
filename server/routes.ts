import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertFeedbackSchema, insertWaitlistSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Feedback endpoint
  app.post("/api/feedback", async (req, res) => {
    try {
      const parsed = insertFeedbackSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid feedback data", details: parsed.error.errors });
      }
      const feedback = await storage.createFeedback(parsed.data);
      return res.status(201).json(feedback);
    } catch (error) {
      console.error("Error creating feedback:", error);
      return res.status(500).json({ error: "Failed to submit feedback" });
    }
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      const parsed = insertWaitlistSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid waitlist data", details: parsed.error.errors });
      }
      const entry = await storage.createWaitlistEntry(parsed.data);
      return res.status(201).json(entry);
    } catch (error) {
      console.error("Error creating waitlist entry:", error);
      return res.status(500).json({ error: "Failed to join waitlist" });
    }
  });

  return httpServer;
}