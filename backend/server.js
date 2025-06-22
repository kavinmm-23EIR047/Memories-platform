const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const feedbackRoutes = require("./feedbackRoutes"); // ✅ Import feedback router

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
app.use(
  cors({
    origin: process.env.CLIENT_URL || "https://memories-frontend-rc2q.onrender.com/",
    methods: ["GET", "POST"],
  })
);

// ✅ Health Check
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

// ✅ Contact Form Handler
app.post("/api/contact", async (req, res) => {
  const { name, people, days, pickup, destination, email, contact } = req.body;

  if (!name || !people || !days || !pickup || !destination || !email || !contact) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const bookingData = {
    name,
    people,
    days,
    pickup,
    destination,
    email,
    contact,
    timestamp: new Date().toISOString(),
  };

  try {
    const filePath = path.join(__dirname, "contact.json");
    const fileData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : [];

    fileData.push(bookingData);
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

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
        <h2>📝 New Bus Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>No. of People:</strong> ${people}</p>
        <p><strong>No. of Days:</strong> ${days}</p>
        <p><strong>Pickup Point:</strong> ${pickup}</p>
        <p><strong>Destination Places:</strong><br/>${destination}</p>
        <p><strong>Submitted At:</strong> ${bookingData.timestamp}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Form submitted and email sent!" });
  } catch (err) {
    console.error("[ERROR] Contact form error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Use feedback routes
app.use("/api", feedbackRoutes);

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`[SERVER] ✅ Listening at http://localhost:${PORT}`);
});
