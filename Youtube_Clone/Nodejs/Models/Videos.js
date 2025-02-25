
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    channel: {
        type: String,
        required: true,
    },
    channelId: {
        type: String,
        required: true
    },
    uploader: {
        type: String,
        required: true,
    },
    views: {
        type: String,
        default: 0,
    },
    likes: {
        type: String,
        default: 0,
    },
    dislikes: {
        type: String,
        default: 0,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    }
});

const Video = mongoose.model("video", videoSchema);

export default Video;