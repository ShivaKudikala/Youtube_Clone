import User from "../../Models/Users.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

async function LoginUser(req, res) {
  try {
      const { email, password } = req.body;

      // Find User by Email
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: "Invalid Email or Password" });

      // Compare Password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid Email or Password" });

      // Generate JWT Token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

      res.json({
          message: "Login Successful",
          token: token,
          user: {
              id: user._id,
              username: user.userName,
              email: user.email
          }
      });
  } catch (error) {
      res.status(500).json({ message: "Error in Login", error: error.message });
  }
}

export default LoginUser;