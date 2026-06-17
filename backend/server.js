// 1. Network Bypass (Fixes the MongoDB timeout in your region)
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// 2. Package Imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// 3. Route Imports (Make sure these files exist in your routes folder!)
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

// 4. Initialization
dotenv.config();
connectDB();
const app = express();

// 5. Middleware
app.use(cors());
app.use(express.json());

// 6. Base Status Route
app.get("/", (req, res) => {
    res.send("StartupSphere Backend API is Running");
});

// 7. Your API Routes
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

// 8. Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});