import { timeAgo } from "../utils/timeAgo.js";
import { formatViews } from "../utils/formatViews.js";

function VideoCard(props){
    return (
        <div className="video-card">
            <img className="video-thumbnail" src={props.video.thumbnailUrl}/>
            <div className="video-details">
                <p className="video-title">{props.video.title}</p>
                <p className="video-channel">{props.video.channel}</p>
                <div>
                    <p className="video-views">{formatViews(props.video.views)} views • {timeAgo(props.video.uploadDate)}</p>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard;