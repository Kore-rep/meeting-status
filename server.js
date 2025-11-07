const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// In-memory storage for status
let statusData = {
  person1: { status: "available", label: "Available", timestamp: Date.now() },
  person2: { status: "available", label: "Available", timestamp: Date.now() },
};

// Get current status
app.get("/api/status", (req, res) => {
  res.json(statusData);
});

// Update status
app.post("/api/status/:person", (req, res) => {
  const { person } = req.params;
  const { status, label } = req.body;

  if (statusData[person]) {
    statusData[person] = {
      status,
      label,
      timestamp: Date.now(),
    };
    res.json({ success: true, data: statusData[person] });
  } else {
    res.status(404).json({ success: false, message: "Person not found" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Meeting Status Server running on port ${PORT}`);
});
