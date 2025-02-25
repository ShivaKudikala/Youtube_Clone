import Video from "../../Models/Videos.js";
import Channel from "../../Models/Channels.js";

const newVideo = async (req, res) => {
    try {
        const userId = req.user.id; // Get the logged-in user's ID from authMiddleware

        // Find the channel associated with the user
        const channel = await Channel.findOne({ owner: userId });
        if (!channel) {
            return res.status(404).json({ message: "Channel not found" });
        }

        const { title, description } = req.body;

        // Validate required fields
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }
        const videoUrl = "https://youtu.be/Iv6s_2cyFl4";
        const thumbnailUrl = `https://dummyimage.com/1280x720/000000/FFFFFF&text=${encodeURIComponent(title)}`
        const newVideo = new Video({
            title,
            thumbnailUrl,
            videoUrl,
            description,
            channel: channel.channelName, // Set channelName from found channel
            channelId: channel._id,
            uploader: userId, // Set uploader as the logged-in user
        });

        // Save the new video
        const savedVideo = await newVideo.save();

        // Push the new video ID into the channel's videos array
        channel.videos.push(savedVideo._id);
        await channel.save();

        res.status(201).json({ message: "Video uploaded successfully", video: savedVideo });
    } catch (error) {
        console.error("Error uploading video:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default newVideo;
