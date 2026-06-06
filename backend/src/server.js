import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

//console.log(process.env.MONGO_URI);
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("StreamNest API Running");
});

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Backend is healthy",
  });
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});