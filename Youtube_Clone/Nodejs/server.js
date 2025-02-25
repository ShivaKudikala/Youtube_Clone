
import express from "express";
import dotenv from "dotenv";
import connectDB from "./ConnectDB.js";
import userRoutes from "./Routes/userRoutes.js";
import channelRoutes from "./Routes/channelRoutes.js";
import videoRoutes from "./Routes/videoRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
  
userRoutes(app);
channelRoutes(app);
videoRoutes(app);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));