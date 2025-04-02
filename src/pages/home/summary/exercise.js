import React from "react";
import { FaFireAlt, FaRegClock } from "react-icons/fa";
import "./index.scss";

const ExerciseCard = () => {
    const calories = 0;
    const duration = "00:00 hr";

    return (
        <div className="exercise-card">
            <h4 className="title">Exercise</h4>
            <div className="info-row">
                <FaFireAlt className="icon fire" />
                <span className="info-text">{calories} cal</span>
            </div>
            <div className="info-row">
                <FaRegClock className="icon" />
                <span className="info-text">{duration}</span>
            </div>
        </div>
    );
};

export default ExerciseCard;