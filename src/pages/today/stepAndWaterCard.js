import React, {useState} from "react";
import {FaShoePrints, FaTint} from "react-icons/fa";
import "./index.scss";

const StepsAndWaterCard = () => {
    const [water, setWater] = useState(8);
    const waterGoal = 12;

    const steps = 2204;
    const stepGoal = 10000;
    const distance = 1.6; // km
    const calories = 83;

    const stepProgress = (steps / stepGoal) * 100;
    const waterProgress = (water / waterGoal) * 100;

    return (
        <div className={'step-water'}>

            <div className="step-water-container">
                <div className="step-water">
                    <div className="step-water-header">
                        <FaShoePrints className="icon orange"/>
                        <span className="step-water-title">Steps</span>
                    </div>
                    <div className="step-water-circle-wrapper">
                        <svg width="80" height="80">
                            <circle cx="40" cy="40" r="34" stroke="#ffece4" strokeWidth="8" fill="none"/>
                            <circle
                                cx="40"
                                cy="40"
                                r="34"
                                stroke="#ff7a00"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray={213.6}
                                strokeDashoffset={213.6 - (213.6 * stepProgress) / 100}
                                strokeLinecap="round"
                                transform="rotate(-90 40 40)"
                            />
                        </svg>
                        <div className="step-water-circle-text">
                            <strong>{steps.toLocaleString()}</strong>
                            <br/>
                            <span className="sub">/ {stepGoal.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="info-row">
                        <span><strong>{distance} km</strong><br/>Distance</span>
                        <span><strong>{calories}</strong><br/>Calories</span>
                    </div>
                </div>

                <div className="step-water">
                    <div className="step-water-header">
                        <FaTint className="icon blue"/>
                        <span className="step-water-title">Water</span>
                    </div>
                    <div className="step-water-circle-wrapper">
                        <svg width="80" height="80">
                            <circle cx="40" cy="40" r="34" stroke="#ffece4" strokeWidth="8" fill="none"/>
                            <circle
                                cx="40"
                                cy="40"
                                r="34"
                                stroke="#ff7a00"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray={213.6}
                                strokeDashoffset={213.6 - (213.6 * waterProgress) / 100}
                                strokeLinecap="round"
                                transform="rotate(-90 40 40)"
                            />
                        </svg>
                        <div className="step-water-circle-text">
                            <strong>{water}</strong>
                            <br/>
                            <span className="sub">/ {waterGoal} cups</span>
                        </div>
                    </div>
                    <div className="water-controls">
                        <div className={'control-btns'}>
                            <button onClick={() => setWater(w => Math.max(0, w - 1))}>−</button>
                            <button onClick={() => setWater(w => Math.min(waterGoal, w + 1))}>+</button>
                        </div>
                        <div className="control-labels">
                            <span>Remove</span>
                            <span>Add</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StepsAndWaterCard;