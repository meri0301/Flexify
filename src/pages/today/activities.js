import React, {memo} from "react";
import activity1 from "../../assets/todayActivity1.png"; // Replace with your actual image path
import activity2 from "../../assets/todayActivity2.png"; // Replace with your actual image path
import "./index.scss";

const activities = [
    {
        image: activity1,
        title: "Losing Weight - Day 15",
        duration: "60 min",
        calories: "291 kcal",
    },
    {
        image: activity2,
        title: "Jump Rope",
        duration: "30 min",
        calories: "115 kcal",
    },
];

const TodayActivities = () => {
    return (
        <div className="today-activities">
            <h4 className="title">Today Activities</h4>
            <p className="total-time">1h 30 min</p>
            <div className="activity-list">
                {activities.map((act, index) => (
                    <div key={index} className="activity-item">
                        <img src={act.image} alt={act.title} />
                        <div className="details">
                            <h5>{act.title}</h5>
                            <p>
                                {act.duration}. {act.calories}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(TodayActivities);