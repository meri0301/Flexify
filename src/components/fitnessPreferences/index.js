import React, {memo, useCallback, useState} from 'react';
import './index.scss';
import {FaAngleLeft} from "react-icons/fa6";
import Button from "../button";
import Motivation from "./motivation";
import MainGoal from "./mainGoal";
import BodyParts from "./bodyParts";
import Height from "./height";
import Weight from "./weight";
import Age from "./age";
import WorkoutType from "./workoutType";
import ActivityLevel from "./activityLevel";

const FitnessPreferences = ({}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState({});
    const progress = ((currentStep + 1) / 8) * 100;

    const selectionHandler = useCallback((option) => {
        // setSelectedOption(option);
        // setProgress((prev) => (prev < 100 ? prev + 20 : 100));
    }, []);

    const nextHandler = useCallback(() => {
        // setProgress((prev) => (prev < 100 ? prev + 20 : 100));
        if (currentStep < 7) {
            setCurrentStep((prev) => prev + 1);
        }
    }, [currentStep])

    const backHandler = useCallback(() => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    }, [currentStep]);

    const selectHandler = useCallback((value, propKey) => {
        setSelectedOption({...selectedOption, [propKey]: value});
    }, [selectedOption]);

    const stepRenderer = useCallback(() => {
        switch (currentStep) {
            case 0:
                return <Motivation selected={selectedOption?.motivation} onSelect={selectHandler}/>;
            case 1:
                return <MainGoal selected={selectedOption?.mainGoal} onSelect={selectHandler}/>;
            case 2:
                return <BodyParts selected={selectedOption?.bodyParts} onSelect={selectHandler}/>;
            case 3:
                return <Height onSelect={selectHandler}/>;
            case 4:
                return <Weight onSelect={selectHandler}/>;
            case 5:
                return <Age onSelect={selectHandler}/>;
            case 6:
                return <WorkoutType selected={selectedOption?.workoutType} onSelect={selectHandler}/>;
            case 7:
                return <ActivityLevel/>;
            default:
                return null;
        }
    }, [currentStep, selectedOption, selectHandler]);

    return (
        <div className="survey-container">
            <div className="survey-header">
                <button className={`pref-back-button ${currentStep === 0 ? 'disabled' : ""}`} onClick={backHandler}><FaAngleLeft/></button>
                <div className="progress-bar">
                    <div className="progress" style={{width: `${progress}%`}}></div>
                </div>
                <span className="skip-button">Skip</span>
            </div>
            {stepRenderer()}
            <Button classNames={'nextButton color-1'} disabled={!selectedOption && currentStep < 3} title={`${currentStep === 7 ? "Finish" : "Next"}`} onClick={nextHandler}/>
        </div>
    )
}

FitnessPreferences.propTypes = {}

export default memo(FitnessPreferences);