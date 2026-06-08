import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register User
export const registerUser = async (req, res) => {
try {
const { username, email, password } = req.body;


if (!username || !email || !password) {
  return res.status(400).json({
    success: false,
    message: "All fields are required",
  });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({
    success: false,
    message: "Invalid email format",
  });
}

if (password.length < 6) {
  return res.status(400).json({
    success: false,
    message: "Password must be at least 6 characters",
  });
}

const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.status(400).json({
    success: false,
    message: "User already exists",
  });
}

const hashedPassword = await bcrypt.hash(password, 10);

const user = await User.create({
  username,
  email,
  password: hashedPassword,
});

res.status(201).json({
  success: true,
  message: "User Registered Successfully",
  user,
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};

// Login User
export const loginUser = async (req, res) => {
try {
const { email, password } = req.body;


if (!email || !password) {
  return res.status(400).json({
    success: false,
    message: "Email and Password are required",
  });
}

const user = await User.findOne({ email });

if (!user) {
  return res.status(400).json({
    success: false,
    message: "User not found",
  });
}

const isMatch = await bcrypt.compare(
  password,
  user.password
);

if (!isMatch) {
  return res.status(400).json({
    success: false,
    message: "Invalid credentials",
  });
}

const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);

res.status(200).json({
  success: true,
  message: "Login Successful",
  token,
  user: {
    _id: user._id,
    username: user.username,
    email: user.email,
    profilePic: user.profilePic,
  },
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};

// Get Profile
export const getProfile = async (req, res) => {
try {
const user = await User.findById(req.user.id)
.select("-password");


if (!user) {
  return res.status(404).json({
    success: false,
    message: "User not found",
  });
}

res.status(200).json({
  success: true,
  user,
});


} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};
