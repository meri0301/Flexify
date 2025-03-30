import React from "react";
import { FaShoePrints } from "react-icons/fa";
import "./index.scss";

const StepsCard = () => {
    const currentSteps = 2204;
    const goalSteps = 10000;
    const progress = (currentSteps / goalSteps) * 100;

    return (
        <div className="steps-card">
            <h4 className="title">Steps</h4>
            <div className="steps-info">
                <FaShoePrints className="icon" />
                <span className="steps-count">{currentSteps.toLocaleString()}</span>
            </div>
            <p className="goal-text">Goal: {goalSteps.toLocaleString()} steps</p>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default StepsCard;