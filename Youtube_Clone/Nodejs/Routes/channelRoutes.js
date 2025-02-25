import NewChannel from "../Controllers/Channels/newChannel.js";
import authMiddleware from "../Controllers/Users/AuthMiddleware.js";
import GetChannel from "../Controllers/Channels/getChannel.js";

function channelRoutes(app){
    app.post("/channel", authMiddleware,  NewChannel);
    app.get("/channel", authMiddleware, GetChannel)
}

export default channelRoutes;