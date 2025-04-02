import React from "react";
import "./index.scss";
import {FaUserCircle, FaBell} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <FaUserCircle className="icon" onClick={() => navigate('/account/profile')}/>
            <h1>FLEXIFY</h1>
            <FaBell className="icon"/>
        </header>
    );
};

export default Header;
