import RegisterUser from "../Controllers/Users/User.Register.js";
import LoginUser from "../Controllers/Users/User.Login.js";
import UpdateUserDetails from "../Controllers/Users/UpdateUser.js";
import authMiddleware from "../Controllers/Users/AuthMiddleware.js";
import GetUser from "../Controllers/Users/GetUser.js";

function userRoutes(app){
    app.post("/register", RegisterUser);
    app.post("/login", LoginUser);
    app.put("/updateUser", authMiddleware, UpdateUserDetails);
    app.get("/getUser", authMiddleware, GetUser);
}

export default userRoutes;