import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus, faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SidebarA from "./SidebarA.jsx";
import SidebarB from "./SidebarB.jsx";
import CreateChannelModal from "./createChannel.jsx";

function Header({ isSidebarA, setIsSidebarA }) {
    const [bars, setBars] = useState(true);
    const [user, setUser] = useState(null);
    const [channel, setChannel] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchUserDetails();
    }, []);
    
    const fetchUserDetails = async () => {
        const storedToken = JSON.parse(localStorage.getItem("token"));
        if (!storedToken) return;
        
        try {
            const response = await fetch("http://localhost:5050/getUser", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${storedToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
                setChannel(data.user.channel);
                localStorage.setItem("user", JSON.stringify(data.user));
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    function handleBars() {
        setIsSidebarA(!isSidebarA);
        setBars(!bars);
    }

    function handleLogout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setChannel(null);
    }

    return (
        <div>
            <div className="yt-navbar">
                <div className="yt-logo">
                    <button className="bars-btn" onClick={handleBars}>
                        <FontAwesomeIcon className="menu-icon" icon={faBars} />
                    </button>
                    
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
                    {channel ? (
                        <Link to={"/channelPage"}>{channel}</Link>
                    ) : (
                        <div className="yt-create" onClick={() => setShowModal(true)}>
                            <FontAwesomeIcon className="plus-icon" icon={faPlus} />
                            <button className="create-btn">Create</button>
                        </div>
                    )}
                    <FontAwesomeIcon className="bell-icon" icon={faBell} />

                    {user ? (
                        <div className="yt-user">
                            <FontAwesomeIcon className="user-icon" icon={faCircleUser} />
                            <p>{user.username}</p>
                            <button className="logout-btn" onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <Link className="yt-user" to={"/login"}>
                            <FontAwesomeIcon className="user-icon" icon={faCircleUser} />
                            <p>Sign In</p>
                        </Link>
                    )}
                </div>
            </div>
            <div className={bars ? "sidebarA-active" : "sidebarB-active"}>  
                {bars ? <SidebarA /> : <SidebarB />}
            </div>
            {showModal && (
                <CreateChannelModal 
                    setShowModal={setShowModal} 
                    user={user} 
                    onChannelCreated={fetchUserDetails}
                />
            )}
        </div>
    );
}

export default Header;
