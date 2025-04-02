import React, {memo, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./index.scss";

const CreatingPlan = () => {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => navigate("/screen"), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 40); // completes in ~4 seconds

        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="creating-plan">
            <h2 className="title">Creating your plan</h2>
            <div className="circle-progress">
                <svg width="200" height="200">
                    <circle
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="#ffece4"
                        strokeWidth="20"
                        fill="none"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="#ff7a00"
                        strokeWidth="20"
                        fill="none"
                        strokeDasharray={565.48}
                        strokeDashoffset={565.48 - (565.48 * progress) / 100}
                        strokeLinecap="round"
                        transform="rotate(-90 100 100)"
                    />
                </svg>
                <div className="progress-text">{progress}%</div>
            </div>
        </div>
    );
};

export default memo(CreatingPlan);
