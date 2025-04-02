import React, {useCallback, useState} from "react";
import "./index.scss";
import Home from "../home";
import Today from "../today";
import Account from "../account";
import Header from "./header";
import Footer from "./footer";
import Workouts from "../workouts";

const Screen = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const buttonClickHandler = useCallback((page) => {
        setCurrentPage(page.value);
    }, [])

    const pageRenderer = useCallback(() => {
        switch (currentPage) {
            case 'home':
                return <Home onNext={buttonClickHandler}/>;
            case 'workouts':
                return <Workouts/>;
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
