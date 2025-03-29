import React, {memo, useCallback, useState} from 'react';

import "./index.scss";
import {GoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import {FaAngleLeft} from "react-icons/fa6";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        console.log("Form submitted:", formData);
    };

    const loginGoogleHandler = useCallback((response) => {
        console.log(response);
        console.log(jwtDecode(response?.credential));
    }, [])


    return (
        <div className="signupContainer">
            <Link to={"/login"} className="back-button"><FaAngleLeft/></Link>
            <span className="title">SIGN UP</span>
            <p className="subtitle">Welcome! Let’s customize Flexify for your goals.</p>
            <form className="signupForm" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={changeHandler} required />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={changeHandler} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={changeHandler} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={changeHandler} required />
                {error && <p className="errorMessage">{error}</p>}
                {/*<Link to={'/preferences'}>*/}
                    <button type="submit" className="signupButton">Sign Up</button>
                {/*</Link>*/}
            </form>
            <div className="divider">
                <hr/>
                <span>Or</span>
                <hr/>
            </div>
            <GoogleLogin
                onSuccess={loginGoogleHandler}
                onError={() => console.log('Login failed')}
            />

            <p className="privacyText">
                We will collect personal information from and about you and use it for various purposes,
                including to customize your Flexify experience. Read more about the purposes, our practices,
                your choices, and your rights in our Privacy Policy.
            </p>
        </div>
    );
};

export default memo(SignUp);