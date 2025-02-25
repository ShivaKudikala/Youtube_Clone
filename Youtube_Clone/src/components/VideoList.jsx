import VideoCard from "./VideoCard";
import "./styles/Video.css";
import { useState } from "react";
import { useEffect } from "react";

function VideoList(){

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch("http://localhost:5050/allVideos");
                if (!response.ok) {
                    throw new Error("Failed to fetch videos");
                }
                const data = await response.json();
                setVideos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="video-list">  
            <div className="video-categories">
                <p className="categories active">All</p>
                <p className="categories">Live</p>
                <p className="categories">Music</p>
                <p className="categories">WWE Superstars</p>
                <p className="categories">Telugu Cinema</p>
                <p className="categories">Cricket</p>
                <p className="categories">Football</p>
                <p className="categories">Marvel Studios</p>
            </div>
            <div className="videos-container">
                {loading && <p>Loading videos...</p>}
                {error && <p>Error in Loading Videos. Please Refresh! Error : {error}</p>}
                {videos.map((video) => (
                    <VideoCard video={video} key={video._id} />
                ))}
            </div>
        </div>
    )
}

export default VideoList;