import newVideo from "../Controllers/Videos/newVideo.js";
import authMiddleware from "../Controllers/Users/AuthMiddleware.js";
import getAllVideos from "../Controllers/Videos/getAllVideos.js";
import getChannelVideos from "../Controllers/Videos/getChannelVideos.js";

function videoRoutes(app){
    app.post("/uploadVideo", authMiddleware, newVideo);
    app.get("/allVideos", getAllVideos);
    app.get("/channelVideos/:id", authMiddleware, getChannelVideos);
}

export default videoRoutes;