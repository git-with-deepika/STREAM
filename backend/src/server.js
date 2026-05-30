import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// ==========================================
// 1. THE .ENV SETUP (ACTIVATION)
// This line immediately goes to your local `.env` file, 
// reads "PORT=value", and injects it into Node's memory.
// ==========================================
dotenv.config();

const app = express();


// ==========================================
// 2. THE CORS SETUP (ACTIVATION)
// This unlocks your backend server. It tells the browser:
// "Accept incoming API requests from other origins (like port 5173)."
// ==========================================
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("StreamNest API Running");
});


// ==========================================
// 3. THE .ENV SETUP (USAGE)
// Instead of hardcoding port, your code safely pulls 
// the value that `dotenv` loaded into `process.env.P
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});