import React from "react";
import "./index.scss";

const ProgressOverview = () => {
    const workoutsDone = 14;
    const totalWorkouts = 21;
    const progress = (workoutsDone / totalWorkouts) * 100;

    const radius = 100;
    const circumference = Math.PI * radius;

    return (
        <div className="progress-overview">
            <svg width="100%" height="80" viewBox="0 0 400 80">
                <circle
                    cx="200"
                    cy="80"
                    r="70"
                    stroke="#ffece4"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray={Math.PI * 70}
                    strokeDashoffset={0}
                    transform="rotate(180 200 80)"
                />
                <circle
                    cx="200"
                    cy="80"
                    r="70"
                    stroke="#ff7a00"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray={Math.PI * 70}
                    strokeDashoffset={(Math.PI * 70) * (1 - progress / 100)}
                    strokeLinecap="round"
                    transform="rotate(180 200 80)"
                />
            </svg>

            <div className="center-text">
                <div className="percent"
                     style={{fontSize: "32px", fontWeight: "bold", marginTop: "-12px"}}>{Math.round(progress)}%
                </div>
                <div className="sub" style={{fontSize: "14px", color: "#555"}}>
                    Workouts done: {workoutsDone}/{totalWorkouts}
                </div>
            </div>

            <div className="stats">
                <div className="stat">
                    <span className="label">Duration</span>
                    <span className="value">540 min</span>
                </div>
                <div className="stat">
                    <span className="label">Weight</span>
                    <span className="value">1.5 kg ↓</span>
                </div>
                <div className="stat">
                    <span className="label">Calories</span>
                    <span className="value">2410 ↓</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressOverview;