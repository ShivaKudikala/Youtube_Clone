
import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
    channelName: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    channelDpUrl: {
        type: String,
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    videos: {
        type: Array
    }
})

const Channel = mongoose.model("channel", channelSchema);

export default Channel;