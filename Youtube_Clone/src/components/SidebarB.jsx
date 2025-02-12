import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DownloadIcon from "@mui/icons-material/Download";

function SidebarB() {
  return (
    <>
        <div className="sidebarB-header">
              <div className="sidebarB-header-icon">
                <HomeIcon className="sidebar-icon" />
                <p className="sidebar-text">Home</p>
              </div>
              <div className="sidebarB-header-icon">
                <PlayCircleOutlineIcon className="sidebar-icon" />
                <p className="sidebar-text">Shorts</p>
              </div>
              <div className="sidebarB-header-icon">
                <SubscriptionsIcon className="sidebar-icon" />
                <p className="sidebar-text">Subscriptions</p>

              </div>
              <div className="sidebarB-header-icon">
                <MusicNoteIcon className="sidebar-icon" />
                <p className="sidebar-text">Music</p>
                
              </div>
              <div className="sidebarB-header-icon">
                <AccountCircleIcon className="sidebar-icon" />
                <p className="sidebar-text">You</p>

              </div>
              <div className="sidebarB-header-icon">
                <DownloadIcon className="sidebar-icon" />
                <p className="sidebar-text">Downloads</p>
                
              </div>
        </div>
    </>
  );
}

export default SidebarB;