import "./styles/Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import "./styles/Header.css";

function SidebarA(){
    return(
        <>
            <div className="sidebarA">
                <div className="sidebarA-header">
                    <div className="sidebarA-header-icon active">
                        <HomeIcon className="sidebar-icon" />
                        <p>Home</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <PlayCircleOutlineIcon className="sidebar-icon"/>
                        <p>Shorts</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <SubscriptionsIcon className="sidebar-icon" />
                        <p>Subscriptions</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <MusicNoteIcon className="sidebar-icon" />
                        <p>Youtube Music</p>
                    </div>
                </div>
                <hr />
                <div className="sidebarA-header"> 
                    <p className="sidebarA-header-icon">You</p>
                    <div className="sidebarA-header-icon">
                        <HistoryIcon className="sidebar-icon" />
                        <p>History</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <QueueMusicIcon className="user-icon" />
                        <p>Playlists</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <VideoLibraryIcon className="user-icon" />
                        <p>Your Videos</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <WatchLaterIcon className="user-icon" />
                        <p>Watch later</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <ThumbUpIcon className="user-icon" />
                        <p>Liked videos</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <DownloadIcon className="user-icon" />
                        <p>Downloads</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <ContentCutIcon className="user-icon" />
                        <p>Your Clips</p>
                    </div>

                </div>
                <hr />
                <div>
                    <p className="sidebarA-header-icon">Explore</p>
                    <div className="sidebarA-header-icon">
                        <WhatshotIcon className="sidebar-icon" />
                        <p>Trending</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <ShoppingBagIcon className="user-icon" />
                        <p>Shopping</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <LibraryMusicIcon className="user-icon" />
                        <p>Music</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <LocalMoviesIcon className="user-icon"/>
                        <p>Movies</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <LiveTvIcon className="user-icon"/>
                        <p>Live</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <SportsEsportsIcon className="user-icon" />
                        <p>Gaming</p>
                    </div>
                    <div className="sidebarA-header-icon">
                        <SportsEsportsIcon className="user-icon" />
                        <p>Sports</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarA;