import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import girlImage from "../../../assets/promoBanner.png"; // girl image
import workoutText from "../../../assets/workout.png";
import Button from "../../../components/button"; // WORKOUT text image

const WorkoutPromo = ({onNext}) => {
    const navigate = useNavigate();

    return (
        <div className="workout-promo">
            <div className="content-container">
                <img src={girlImage} alt="Workout Girl" className="girl-image"/>
                <div className="text-overlay">
                    <h3>FULL BODY</h3>
                    <img src={workoutText} alt="Workout" className="workout-text"/>
                    <p className="challenge">7x4 Challenge</p>
                </div>
            </div>
            <Button
                title={'Next'}
                classNames={'next-btn color-1'}
                onClick={() => onNext({value: 'workouts'})}
            />
        </div>
    );
};

export default WorkoutPromo;