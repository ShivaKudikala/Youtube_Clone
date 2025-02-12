import VideoCard from "./VideoCard";
import "./styles/Video.css";

function VideoList(){
    return (
        <div className="video-list">  
            <VideoCard />
            <p>Video List</p>
        </div>
    )
}

export default VideoList;