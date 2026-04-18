const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    const { username, firstName, lastName, email, phoneNumber, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already in use' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

  
    // Create user
    const newUser = new User({
      username,
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword
    });

    await newUser.save();

    // Create JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

   res.status(201).json({ message: "User created successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// LOGIN
exports.loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    // Find user by email OR username
    const user = await User.findOne({
      $or: [
        { email: identifier },
        { username: identifier }
      ]
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};