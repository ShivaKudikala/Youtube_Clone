import Channel from "../../Models/Channels.js";
import User from "../../Models/Users.js";

async function GetChannel(req, res){
    try {
        const userId = req.user.id; // Extract user ID from authenticated user

        // Find user and get the channel name
        const user = await User.findById(userId).select("channel");

        if (!user || !user.channel) {
            return res.status(404).json({ message: "User or channel not found" });
        }

        // Find channel details using the channel name
        const channel = await Channel.findOne({ channelName: user.channel });

        if (!channel) {
            return res.status(404).json({ message: "Channel details not found" });
        }

        res.status(200).json({ channel });
    } catch (error) {
        console.error("Error fetching channel details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export default GetChannel;