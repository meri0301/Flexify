import React, {useCallback, useState} from "react";
import "./index.scss";
import {FaFireAlt, FaUserCircle, FaBell, FaHome, FaDumbbell, FaRegUser} from "react-icons/fa";
import Home from "../home";
import {useNavigate} from "react-router-dom";
import Today from "../today";

const pages = [
    {value: 'home', title: 'Home', icon: <FaHome/>},
    {value: 'workouts', title: 'Workouts', icon: <FaDumbbell/>},
    {value: 'today', title: 'Today', icon: <FaFireAlt/>},
    {value: 'account', title: 'Account', icon: <FaRegUser/>},
]

const Screen = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState('home');

    const pageRenderer = useCallback(() => {
        switch (currentPage) {
            case 'home':
                return <Home/>;
            case 'workouts':
                return <div>Workout</div>;
            case 'today':
                return <Today/>;
            case 'account':
                return <div>Account</div>;
            default:
                return null;
        }
    }, [currentPage]);

    const buttonClickHandler = useCallback((page) => {
        setCurrentPage(page.value);
    }, [])

    return (
        <div className="screen">
            <header className="header">
                <FaUserCircle className="icon"/>
                <h1>FLEXIFY</h1>
                <FaBell className="icon"/>
            </header>

            {pageRenderer()}

            <footer className="bottom-nav">
                {pages.map((page) => (
                    <button
                        key={page.value}
                        className={`nav-btn ${currentPage === page.value ? "active" : ""}`}
                        onClick={() => buttonClickHandler(page)}
                    >
                        {page.icon}
                        <span>{page.title}</span>
                    </button>
                ))}
            </footer>
        </div>
    );
};

export default Screen;
