import React, {useCallback, useState} from "react";
import "./index.scss";
import Home from "../home";
import {useNavigate} from "react-router-dom";
import Today from "../today";
import Account from "../account";
import Header from "./header";
import Footer from "./footer";

const Screen = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState('home');

    const buttonClickHandler = useCallback((page) => {
        setCurrentPage(page.value);
    }, [])

    const pageRenderer = useCallback(() => {
        switch (currentPage) {
            case 'home':
                return <Home/>;
            case 'workouts':
                return <div>Workout</div>;
            case 'today':
                return <Today/>;
            case 'account':
                return <Account/>;
            default:
                return null;
        }
    }, [currentPage]);

    return (
        <div className="screen">
            <Header/>

            {pageRenderer()}

            <Footer onButtonClick={buttonClickHandler} current={currentPage}/>
        </div>
    );
};

export default Screen;
