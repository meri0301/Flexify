import React, {memo, useCallback, useState} from 'react';
import './index.scss';
import {Link, useNavigate} from "react-router-dom";
import {FaAngleLeft} from "react-icons/fa6";
import {GoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signInHandler = useCallback(() => {
        console.log('sign innnnn');
        navigate('/preferences');
    }, [navigate]);

    const loginGoogleHandler = useCallback((response) => {
        console.log(response);
        console.log(jwtDecode(response?.credential))
    }, [])

    return (
        <div className="signin-container">
            <div className="signin-card">
                {/* Back Button */}
                <Link to={"/login"} className="back-button"><FaAngleLeft/></Link>

                {/* Sign In Title */}
                <span className="title">SIGN IN</span>
                <p className="subtitle">Welcome! Let’s customize Flexify for your goals.</p>

                {/* Email Input */}
                <input
                    type="email"
                    placeholder="Email Address"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password Input */}
                <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Sign In Button */}
                {/*<Link to={'/preferences'} className={'linkContent'}>*/}
                    <button className="signin-button" onClick={signInHandler}>Sign In</button>
                {/*</Link>*/}

                {/* Divider */}
                <div className="divider">
                    <hr/>
                    <span>Or</span>
                    <hr/>
                </div>

                {/* Google Sign In */}
                <GoogleLogin
                    onSuccess={loginGoogleHandler}
                    onError={() => console.log('Login failed')}
                />


                {/* Privacy Note */}
                <p className="privacy-text">
                    We will never post anything without your permission.
                </p>
            </div>
        </div>
    );
}

export default memo(SignIn)