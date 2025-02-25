import { useState } from "react";
import "./styles/CreateChannel.css";

function CreateChannelModal({ setShowModal, user, onChannelCreated }) {
    const [channelName, setChannelName] = useState("");
    const [description, setDescription] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();
        const storedToken = JSON.parse(localStorage.getItem("token"));
        if (!user && storedToken) {
            console.log("You must be logged in to create a channel.");
            return;
        }

        const DpUlrl = "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/01/04140302/pewdiepie-1024x1024.png"
        const channelData = {
            channelName: channelName,
            description: description,
            owner: user._id,
            channelDpUrl: DpUlrl,
        }

        console.log("cD",channelData);
        const channelForUpdate = {
            channel: channelName
        }

        try {
            const response = await fetch("http://localhost:5050/channel", {  // Replace with your backend URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${storedToken}`, // Assuming JWT token is stored
                },
                body: JSON.stringify(channelData),
            });

            if (!response.ok) {
                throw new Error("Failed to create channel");
            }

            const data = await response.json();

            const update = await fetch("http://localhost:5050/updateUser" , {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${storedToken}`, // Assuming JWT token is stored
                },
                body: JSON.stringify(channelForUpdate),
            })

            const updated = await update.json();

            setShowModal(false); // Close modal after success
            onChannelCreated();
        }catch(error){
            console.error("Error creating channel:", error);
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="appear-text">How you'll appear</h2>
                <div className="form-image">
                    <div className="img-dp">
                        <img className="channeldp" src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/01/04140302/pewdiepie-1024x1024.png" alt="channeldp" />
                        <p style={{color: "rgb(79, 79, 229)"}}>Select Picture</p>
                    </div>
                    <form onSubmit={handleSubmit} className="full-form">
                        <div className="create-inps">
                            <input
                                className="create-inp"
                                type="text"
                                placeholder="Name"
                                value={channelName}
                                onChange={(e) => setChannelName(e.target.value)}
                                required
                            />
                            <textarea
                                className="create-inp"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                            <p style={{fontSize:"14px", color: "rgb(149, 147, 147)"}}>By clicking Create Channel You agree to <span style={{color: "rgb(79, 79, 229)"}}>Youtube Terms and Services. </span> 
                                Changes made to your name and profile picture are visible only on youtube and not other google services. <span style={{color: "rgb(79, 79, 229)"}}>Learn more</span></p>
                                
                        </div>
                        <div className="modal-buttons">
                            <button type="button" className="modal-cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                            <button type="submit" className="modal-create-btn">Create Channel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateChannelModal;