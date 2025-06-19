// server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const feedbackRoutes = require("./feedbackRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✨ Error Handling for Crashes
process.on("uncaughtException", (err) => {
  console.error("[CRASH] Uncaught Exception:", err);
});
process.on("unhandledRejection", (err) => {
  console.error("[CRASH] Unhandled Rejection:", err);
});

// ✨ Middleware
app.use(express.json({ limit: "2mb" }));
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PATCH"],
}));

// ✨ API Routes
app.use("/api", feedbackRoutes);

// ✅ Bus Booking Contact Email Route
app.post("/api/contact", async (req, res) => {
  const { name, email, contact, buslist, need } = req.body;

  if (!name || !email || !contact || !buslist || !need) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Bus Booking Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "🚌 New Bus Booking Request",
      html: `
        <h2>📝 New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Bus Selected:</strong> ${buslist}</p>
        <p><strong>Need:</strong><br/>${need}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("[ERROR] Failed to send email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`[SERVER] ✅ Listening at http://localhost:${PORT}`);
});
