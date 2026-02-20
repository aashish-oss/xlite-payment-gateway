import "dotenv/config";
import express from "express";
import cors from "cors";
import { sendContactEmail, sendComplaintEmail } from "./contactHandler.js";

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration - allow all origins in production, or specific frontend URL
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(",").map(origin => origin.trim())
  : ["http://localhost:5173", "http://localhost:3000"];

app.use(cors({ 
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV !== "production") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    await sendContactEmail(req.body);
    res.status(200).json({ success: true, message: "Message sent." });
  } catch (err) {
    const status = err.message.includes("required") ? 400 : err.message.includes("not configured") ? 503 : 500;
    res.status(status).json({ message: err.message || "Failed to send message." });
  }
});

app.post("/api/complaint", async (req, res) => {
  try {
    await sendComplaintEmail(req.body);
    res.status(200).json({ success: true, message: "Complaint submitted." });
  } catch (err) {
    const status = err.message.includes("required") ? 400 : err.message.includes("not configured") ? 503 : 500;
    res.status(status).json({ message: err.message || "Failed to submit complaint." });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    email: process.env.CONTACT_EMAIL || "xlitewalletindia@gmail.com",
    configured: !!process.env.SMTP_PASSWORD 
  });
});

app.listen(PORT, () => {
  console.log("✅ Contact API running on port " + PORT);
  console.log("🌐 Environment: " + (process.env.NODE_ENV || "development"));
  console.log("📧 Email: " + (process.env.CONTACT_EMAIL || "xlitewalletindia@gmail.com"));
  console.log("🔗 Allowed Origins: " + allowedOrigins.join(", "));
  if (!process.env.SMTP_PASSWORD) {
    console.log("⚠️  WARNING: SMTP_PASSWORD not set in .env file");
    console.log("   Forms will not work until Gmail App Password is configured.");
  } else {
    console.log("✅ SMTP configured - Forms are ready!");
  }
  console.log("");
  console.log("📡 API Endpoints:");
  console.log("   POST /api/contact - Contact form");
  console.log("   POST /api/complaint - Complaint form");
  console.log("   GET  /api/health - Health check");
});
