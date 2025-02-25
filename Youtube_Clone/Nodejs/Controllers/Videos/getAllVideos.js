import Video from "../../Models/Videos.js";

async function getAllVideos(req,res){
    const videos = await Video.find();

    if(!videos){
        return res.status(404).json({message: "No videos available to show"});
    }

    res.send(videos);
}

export default getAllVideos;