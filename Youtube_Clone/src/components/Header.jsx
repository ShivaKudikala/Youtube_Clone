import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus, faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import SidebarA from "./SidebarA.jsx";
import SidebarB from "./SidebarB.jsx";
import VideoList from "./VideoList.jsx";

function Header(){

    const [bars, setBars] = useState(true);

    function handleBars(){
        setBars(!bars);
    }

    return (
        <>
            <div className="yt-navbar">
                <div className="yt-logo">
                    <button className="bars-btn" onClick={handleBars}><FontAwesomeIcon className="menu-icon" icon={faBars} /></button>
                    
                    <div className="yt-logo-img">
                        <img className="yt-icon" src="https://www.youtube.com/s/desktop/95316349/img/logos/favicon_48x48.png" />
                        <p className="yt-text">Youtube</p>
                    </div>
                </div>
                <div className="yt-search">
                    <input className="search-input" type="text" placeholder="Search" />
                    <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
                </div>
                <div className="yt-icons">
                    <div className="yt-create">
                        <FontAwesomeIcon className="plus-icon" icon={faPlus} />
                        <button className="create-btn">Create</button>
                    </div>
                    <FontAwesomeIcon className="bell-icon" icon={faBell} />
                    <div className="yt-user">
                        <FontAwesomeIcon className="user-icon" icon={faCircleUser} />
                        <p>SignIn</p>
                    </div>
                </div>
            </div>
            <div className="yt-content">  
                {bars ? <SidebarA /> : <SidebarB />}
                <VideoList />
            </div>
            
        </>
    )
}

export default Header;