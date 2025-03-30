import React, {memo, useState} from "react";
import "./index.scss";

const ActivityLevel = () => {
    const [level, setLevel] = useState(0);

    const levels = [
        {
            title: "Beginner",
            description: "I'm new to fitness and want a solid foundation",
            percentage: 25,
            icon: "\uD83D\uDD25"
        },
        {
            title: "Intermediate",
            description: "I work out regularly and want to level up",
            percentage: 60,
            icon: "\uD83D\uDD25"
        },
        {
            title: "Advanced",
            description: "I'm very active and want to push boundaries",
            percentage: 100,
            icon: "\uD83D\uDD25"
        }
    ];

    const current = levels[level];

    const handleSliderChange = (e) => {
        setLevel(parseInt(e.target.value, 10));
    };

    return (
        <div className="activity-picker">
            <h2 className="title">What’s your activity level?</h2>

            <div className="circle-progress">
                <svg width="160" height="160">
                    <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#ffece4"
                        strokeWidth="16"
                        fill="none"
                    />
                    <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#ff7a00"
                        strokeWidth="16"
                        fill="none"
                        strokeDasharray={`${440}`}
                        strokeDashoffset={`${440 - (440 * current.percentage) / 100}`}
                        strokeLinecap="round"
                        transform="rotate(-90 80 80)"
                    />
                </svg>
                <div className="icon">🔥</div>
            </div>

            <div className="level-title">{current.title}</div>
            <p className="level-desc">{current.description}</p>

            <input
                type="range"
                min="0"
                max="2"
                step="1"
                value={level}
                onChange={handleSliderChange}
                className="range-slider"
            />

            <div className="slider-titles">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
            </div>
        </div>
    );
};

export default memo(ActivityLevel);
