import User from "../models/user.js";

export const registerUser = async (req, res) => {
try {
const { username, email, password } = req.body;


// Required fields validation
if (!username || !email || !password) {
  return res.status(400).json({
    success: false,
    message: "All fields are required",
  });
}

// Email format validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({
    success: false,
    message: "Invalid email format",
  });
}

// Password length validation
if (password.length < 6) {
  return res.status(400).json({
    success: false,
    message: "Password must be at least 6 characters",
  });
}

// Check if user already exists
const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.status(400).json({
    success: false,
    message: "User already exists",
  });
}

// Create new user
const user = await User.create({
  username,
  email,
  password,
});

res.status(201).json({
  success: true,
  message: "User Registered Successfully",
  user,
});


} catch (error) {
console.log(error);


res.status(500).json({
  success: false,
  message: error.message,
});


}
};
