import { useEffect, useState } from "react";
import "./styles/Channelpage.css";
import { formatViews } from "../utils/formatViews.js";
import "./styles/Video.css";
import VideoCard from "./VideoCard.jsx";

function ChannelPage() {
    const [channel, setChannel] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchChannel = async () => {
            try {
                const storedToken = JSON.parse(localStorage.getItem("token")); // Get token from localStorage
                if (!storedToken) {
                    setError("User not authenticated");
                    setLoading(false);
                    return;
                }

                const response = await fetch("http://localhost:5050/channel", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${storedToken}`, // Send token for authentication
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch channel details");
                }

                const data = await response.json();
                setChannel(data.channel); // Update state with fetched data

                const response2 = await fetch(`http://localhost:5050/channelVideos/${data.channel._id}`,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${storedToken}`, // Send token for authentication
                    },
                })

                if(!response2.ok) {
                    throw new Error("Failed to fetch Channel Videos");
                }

                const videoData = await response2.json();
                setVideos(videoData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchChannel();
    }, [channel]);

    if (loading) return <p>Loading channel details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="channelpage">
            <img 
                className="channel-banner"
                src={`https://dummyimage.com/2560x1440/000000/FFFFFF&text=${encodeURIComponent(channel.channelName)}`} 
                alt="Channel Banner"
            />
            <div className="channel-info">
                <div>
                    <img className="channelDP" src={channel.channelDpUrl} alt="channelDP" />
                </div>
                <div className="channel-details">
                    <h1 style={{margin: 0, padding: 0, fontSize: "35px"}}>{channel.channelName}</h1>
                    <p style={{margin: 0, padding: 0, color: "grey",  fontSize: "17px"}}>{formatViews(channel.subscribers)} subscribers • {formatViews(channel.videos.length)} videos</p>
                    <p style={{margin: 0, padding: 0,  color: "grey",  fontSize: "17px"}}>{channel.description}</p>
                    <p style={{margin: 0, padding: 0, color: "#065FD4",  fontSize: "17px"}}>https://youtu.be/Iv6s_2cyFl4 <span style={{color: "black", fontWeight:"bold"}}>..and 3 more</span></p>
                    <p style={{margin: 0}} className="sub-btn">Subscribe</p>
                </div>
            </div>
            <div className="videoTypes">
                <p>Home</p>
                <p className="video-Tag">Videos</p>
                <p>Shorts</p>
                <p>Live</p>
                <p>Playlists</p>

            </div>
            <hr className="hrTag" />
            <div className="videos-container">
                {loading && <p>Loading videos...</p>}
                {error && <p>Error in Loading Videos. Please Refresh! Error : {error}</p>}
                {videos.map((video) => (
                    <VideoCard video={video} key={video._id} />
                ))}
            </div>
        </div>
    );
}

export default ChannelPage;
