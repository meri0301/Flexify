import React, {memo, useCallback, useState} from 'react';
import './index.scss';
import {FaAngleLeft} from "react-icons/fa6";
import Button from "../button";
import Motivation from "./motivation";
import MainGoal from "./mainGoal";

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
        console.log('--')
        setSelectedOption({...selectedOption, [propKey]: value});
    }, [selectedOption]);

    const stepRenderer = useCallback(() => {
        switch (currentStep) {
            case 0:
                return <Motivation selected={selectedOption?.motivation} onSelect={selectHandler}/>;
            case 1:
                return <MainGoal/>;
            case 2:
                return <div>3</div>;
            case 3:
                return <div>4</div>;
            case 4:
                return <div>5</div>;
            case 5:
                return <div>6</div>;
            case 6:
                return <div>7</div>;
            case 7:
                return <div>8</div>;
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