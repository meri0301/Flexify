import React from "react";
import "./index.scss";
import {FaUserCircle, FaBell} from "react-icons/fa";

const Header = () => {

    return (
        <header className="header">
            <FaUserCircle className="icon"/>
            <h1>FLEXIFY</h1>
            <FaBell className="icon"/>
        </header>
    );
};

export default Header;
