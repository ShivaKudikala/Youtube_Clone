import Video from "../../Models/Videos.js";

async function getChannelVideos(req, res) {
    const channelId = req.params.id;  // Extract channel name from URL params

    if (!channelId) {
        return res.status(400).json({ message: "Channel parameter is required!" });
    }

    try {
        const videos = await Video.find({ channelId: channelId });

        if (!videos.length) {
            return res.status(404).json({ message: `No videos found for channelId: ${channelId}` });
        }

        res.status(200).json(videos);

    } catch (error) {
        console.error(`Error finding videos for channel Id '${channelId}':`, error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default getChannelVideos;