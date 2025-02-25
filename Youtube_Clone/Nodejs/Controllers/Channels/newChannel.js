import Channel from "../../Models/Channels.js"

async function NewChannel(req,res){
    try{
        const {channelName, description, owner, channelDpUrl} = req.body;


        if (!channelName || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        const newChannel = new Channel({
            channelName: channelName,
            description: description,
            owner: owner,
            channelDpUrl: channelDpUrl,
        })
        console.log(newChannel);
        await newChannel.save();

        return res.status(201).json({
            message: "Channel created successfully",
            newChannel,
        });

    }catch(error){
        console.error("Error creating channel:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default NewChannel;