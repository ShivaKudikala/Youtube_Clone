import User from "../../Models/Users.js";
import bcrypt from "bcryptjs";

async function RegisterUser(req,res){
    try {
        const { userName, email, password } = req.body;
    
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });
    
        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        // Create User
        const newUser = new User({ 
            userName: userName,
            email: email, 
            password: hashedPassword 
        });
        await newUser.save();
    
        res.status(201).json({ message: "User registered successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error in Registration", error });
      }
}

export default RegisterUser;