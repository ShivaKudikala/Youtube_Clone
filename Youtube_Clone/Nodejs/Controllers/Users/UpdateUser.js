import User from "../../Models/Users.js";

async function UpdateUserDetails(req, res){

    try{
        const userId = req.user.id;

        const {channel} = req.body;

        if (!channel) {
            return res.status(400).json({ message: "Channel ID is required" });
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { channel }, // Prevents duplicate entries
            { new: true } // Returns the updated user document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Channel added to user successfully", user: updatedUser });
    }catch(error){
        console.error("Error updating user with channel:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

}

export default UpdateUserDetails;