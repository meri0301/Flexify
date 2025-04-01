import React from "react";
import {FaFireAlt, FaHome, FaDumbbell, FaRegUser} from "react-icons/fa";

import PropTypes from "prop-types";
import "./index.scss";

const pages = [
    {value: 'home', title: 'Home', icon: <FaHome/>},
    {value: 'workouts', title: 'Workouts', icon: <FaDumbbell/>},
    {value: 'today', title: 'Today', icon: <FaFireAlt/>},
    {value: 'account', title: 'Account', icon: <FaRegUser/>},
]

const Footer = ({onButtonClick, current}) => {

    return (
        <footer className="bottom-nav">
            {pages.map((page) => (
                <button
                    key={page.value}
                    onClick={() => onButtonClick(page)}
                    className={`nav-btn ${current === page.value ? "active" : ""}`}
                >
                    {page.icon}
                    <span>{page.title}</span>
                </button>
            ))}
        </footer>
    );
};

Footer.propTypes = {
    current: PropTypes.string,
    onButtonClick: PropTypes.func,
}

export default Footer;