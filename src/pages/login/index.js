import React, {memo} from "react";
import {Link} from "react-router-dom";
import Slider from "../../components/slider";
import {data} from "../../components/slider/data";
import './index.scss';

const Login = () => {

    return (
        <div className={"loginContainer"}>
            <span className={'welcome'}>Welcome</span>
            <Slider data={data}/>

            <span className={'welcomeText'}>
                Welcome back! Log in to track your progress, set new goals, and take your fitness journey to the next level. Let’s crush those goals together!
            </span>

            <Link to="/signIn" className="signIn">Sign In</Link>
            <Link to="/signup" className="signup">Sign Up</Link>
        </div>
    )
}
export default memo(Login);