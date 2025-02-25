import User from "../../Models/Users.js";

async function GetUser(req, res){
    try {
        const user = await User.findById(req.user.id).select("username channel");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export default GetUser;