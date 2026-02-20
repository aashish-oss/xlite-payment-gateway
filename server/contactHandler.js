import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "xlitewalletindia@gmail.com";

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || CONTACT_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

export async function sendContactEmail(body) {
  const { name, email, company, phone, message } = body || {};
  if (!name || !email || !message) {
    throw new Error("Name, email and message are required.");
  }
  if (!process.env.SMTP_PASSWORD) {
    throw new Error("Contact form is not configured. Please email " + CONTACT_EMAIL + " directly.");
  }

  const transporter = getTransporter();
  const mailOptions = {
    from: process.env.SMTP_FROM || `"Xlite Contact" <${process.env.SMTP_USER || CONTACT_EMAIL}>`,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Contact form: ${(name || "").slice(0, 50)}`,
    text: [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Company: ${company || "-"}`,
      `Phone: ${phone || "-"}`,
      "",
      "Message:",
      message || "-",
    ].join("\n"),
    html: [
      "<p><strong>Name:</strong> " + (name || "-") + "</p>",
      "<p><strong>Email:</strong> " + (email || "-") + "</p>",
      "<p><strong>Company:</strong> " + (company || "-") + "</p>",
      "<p><strong>Phone:</strong> " + (phone || "-") + "</p>",
      "<p><strong>Message:</strong></p>",
      "<p>" + (message || "-").replace(/\n/g, "<br>") + "</p>",
    ].join(""),
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    // Better error messages for common Gmail errors
    if (error.code === "EAUTH" || error.message?.includes("535") || error.message?.includes("Invalid login")) {
      throw new Error("Gmail App Password is incorrect or missing. Please generate a new App Password from https://myaccount.google.com/apppasswords and update SMTP_PASSWORD in .env file.");
    }
    throw error;
  }
}

export async function sendComplaintEmail(body) {
  const { name, email, phone, complaint_type, complaint_details } = body || {};
  if (!name || !email || !complaint_type || !complaint_details) {
    throw new Error("Name, email, complaint type and complaint details are required.");
  }
  if (!process.env.SMTP_PASSWORD) {
    throw new Error("Complaint form is not configured. Please email " + CONTACT_EMAIL + " directly.");
  }

  const transporter = getTransporter();
  const mailOptions = {
    from: process.env.SMTP_FROM || `"Xlite Complaints" <${process.env.SMTP_USER || CONTACT_EMAIL}>`,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Complaint from ${(name || "").slice(0, 50)} - ${complaint_type}`,
    text: [
      "--- COMPLAINT (Website) ---",
      "",
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      `Complaint Type: ${complaint_type || "-"}`,
      "",
      "Details:",
      complaint_details || "-",
    ].join("\n"),
    html: [
      "<h2>--- COMPLAINT (Website) ---</h2>",
      "<p><strong>Name:</strong> " + (name || "-") + "</p>",
      "<p><strong>Email:</strong> " + (email || "-") + "</p>",
      "<p><strong>Phone:</strong> " + (phone || "-") + "</p>",
      "<p><strong>Complaint Type:</strong> " + (complaint_type || "-") + "</p>",
      "<p><strong>Details:</strong></p>",
      "<p>" + (complaint_details || "-").replace(/\n/g, "<br>") + "</p>",
    ].join(""),
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    // Better error messages for common Gmail errors
    if (error.code === "EAUTH" || error.message?.includes("535") || error.message?.includes("Invalid login")) {
      throw new Error("Gmail App Password is incorrect or missing. Please generate a new App Password from https://myaccount.google.com/apppasswords and update SMTP_PASSWORD in .env file.");
    }
    throw error;
  }
}
