import React from "react";
import {FaFlag, FaDumbbell} from "react-icons/fa";
import './index.scss'

const CaloriesCard = () => {
    return (
        <section className="calories-card">
            <div className={'calories-card-header'}>
                <h3 className="calories-title">Calories</h3>
                <p className="calories-subtitle">Remaining = Goal - Exercise</p>
            </div>
            <div className="calories-content">
                <div className="calories-progress">
                    <svg width="100" height="100">
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#ffece4"
                            strokeWidth="10"
                            fill="none"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#ff7a00"
                            strokeWidth="10"
                            fill="none"
                            strokeDasharray="250"
                            strokeDashoffset="50"
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                        />
                    </svg>
                    <div className="calories-amount">
                        <span className="calories-amount-bold">1290</span>
                        <span>Remaining</span>
                    </div>
                </div>
                <div className="calories-info">
                    <div>
                        <FaFlag className="info-icon"/>
                        <span>Base Goal</span>
                        <span className={'strong'}>1500</span>
                    </div>
                    <div>
                        <FaDumbbell className="info-icon"/>
                        <span>Exercise</span>
                        <span className={'strong'}>2</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaloriesCard;