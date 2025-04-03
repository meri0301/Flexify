import React from "react";
import CaloriesCard from "./calories/index";
import Summary from "./summary/index";
import WorkoutPromo from "./promo/index";
import "./index.scss";

const HomeScreen = ({onNext}) => {
    return (
        <div className={'home-screen'}>
            <h2 className="section-title">Today</h2>

            <div className={'home-screen-content'}>
                <CaloriesCard/>
                <Summary/>
                <WorkoutPromo onNext={onNext}/>
            </div>

        </div>
    );
};

export default HomeScreen;
