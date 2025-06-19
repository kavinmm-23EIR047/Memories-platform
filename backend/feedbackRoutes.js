const express = require("express");
const fs = require("fs");
const nodemailer = require("nodemailer");
const router = express.Router();

const FEEDBACK_FILE = "feedbacks.json";

// ✅ Helper: Load feedbacks safely
function loadFeedbacks() {
  try {
    if (!fs.existsSync(FEEDBACK_FILE)) {
      fs.writeFileSync(FEEDBACK_FILE, "[]", "utf8");
      return [];
    }

    const data = fs.readFileSync(FEEDBACK_FILE, "utf8").trim();
    if (data === "") {
      fs.writeFileSync(FEEDBACK_FILE, "[]", "utf8");
      return [];
    }

    return JSON.parse(data);
  } catch (err) {
    console.error("Error loading feedbacks:", err.message);
    return [];
  }
}

// ✅ Helper: Save feedbacks safely
function saveFeedbacks(feedbacks) {
  try {
    fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(feedbacks, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving feedbacks:", err.message);
    throw err;
  }
}

// ✅ POST /api/feedback - Submit Feedback
router.post("/feedback", async (req, res) => {
  const { name, email, comment } = req.body;
  if (!name || !email || !comment) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const id = Date.now().toString();
  const newFeedback = { id, name, email, comment, stars: 0 };

  try {
    const feedbacks = loadFeedbacks();
    feedbacks.push(newFeedback);
    saveFeedbacks(feedbacks);
  } catch (err) {
    console.error("Failed to save feedback:", err);
    return res.status(500).json({ error: "Failed to save feedback" });
  }

  res.status(200).json({ success: true, message: "Feedback received" });

  // ✅ Send email notification (Optional)
  const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
  if (EMAIL_USER && EMAIL_PASS && EMAIL_TO) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: EMAIL_USER,
        to: EMAIL_TO,
        subject: "📝 New Feedback Received",
        html: `<h4>${name} (${email})</h4><p>${comment}</p>`,
      });
    } catch (err) {
      console.error("Failed to send feedback email:", err);
    }
  }
});

// ✅ GET /api/feedbacks - Fetch all feedbacks
router.get("/feedbacks", (req, res) => {
  try {
    const feedbacks = loadFeedbacks();
    res.json(feedbacks);
  } catch (err) {
    console.error("Failed to read feedbacks:", err);
    res.status(500).json({ error: "Failed to read feedbacks" });
  }
});

// ✅ PATCH /api/feedback/star/:id - Add star
router.patch("/feedback/star/:id", (req, res) => {
  const feedbackId = req.params.id;

  try {
    const feedbacks = loadFeedbacks();
    const index = feedbacks.findIndex((fb) => fb.id === feedbackId);

    if (index === -1) {
      return res.status(404).json({ error: "Feedback not found" });
    }

    feedbacks[index].stars = (feedbacks[index].stars || 0) + 1;
    saveFeedbacks(feedbacks);

    res.json({ success: true, message: "Star added" });
  } catch (err) {
    console.error("Failed to update star:", err);
    res.status(500).json({ error: "Failed to update star" });
  }
});

module.exports = router;
