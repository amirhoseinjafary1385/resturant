import React, { useState } from "react";
//Add Style
import './info.css';
import { Link } from "react-router-dom";
import App from "../../App";
import { ThemeProvider } from "../Themes/HandleTheme";
import saveUserData from "../information_login/database";

const Info = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
//set defiend

const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // اینجا می‌توانید منطق ورود را پیاده‌سازی کنید
        console.log("نام کاربری :", username);
        console.log("رمز عبور :", password);  
        console.log("ایمیل:", email);

        const userData = {
            username,
            password,
            email,
        };

        saveUserData(userData);
        //Send Message
        setSuccessMessage('اطلاعات شما با موفقیت به ثبت رسید!');
        // داده ها را به database.jsx منتقل کنید
        setUsername('');
        setPassword('');
        setEmail('');
    };


return(
    <div className="login-form">
        <h2 className="intro">ورود به حساب کاربری</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form className="form" onSubmit={handleSubmit}>
               {/* Form code here */}
            <div>
                <label htmlFor="username">نام کاربری:</label>
                <input
                    type="text"
                    id= "username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}                    
                    required
                />
            </div>

            <div>
                <label htmlFor="password">گذرواژه:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="email">ایمیل شما:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                ></input>
            </div>
            <button className="btn" type="submit">ورود</button>
        </form>
    </div>
    );
};

export default Info;