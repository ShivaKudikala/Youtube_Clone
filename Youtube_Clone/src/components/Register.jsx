import "./styles/Login_Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function handleRegister(e){
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5050/register", { userName, email, password});
            console.log(res);
            navigate("/login");
        }catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        }
    }

    return(
        <div className="loginReg-body">
            <div className="LoginReg-sec">
                <div className="loginReg-text">
                    <img src="https://www.youtube.com/s/desktop/95316349/img/logos/favicon_48x48.png" />
                    <h1>Register</h1>
                    <p>to continue to YouTube</p>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <form className="loginReg-form" onSubmit={handleRegister}>
                    <div className="form-inputs">
                        <input className="form-inp" placeholder="UserName" onChange={(e) => setUserName(e.target.value)} required />
                        <input className="form-inp" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                        <input className="form-inp" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className="form-btns">
                        <p>Login to account</p>
                        <button className="login-btn">Register</button>
                    </div>
                </form>
            </div>
            <div className="loginReg-sec2">
                <p>English(United States)</p>
                <div className="sec2-options">
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>
        </div>
    )
}

export default Register;