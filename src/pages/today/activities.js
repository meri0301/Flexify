import React, {memo, useCallback} from "react";
import activity1 from "../../assets/todayActivity1.png"; // Replace with your actual image path
import activity2 from "../../assets/todayActivity2.png"; // Replace with your actual image path
import "./index.scss";
import {useNavigate} from "react-router-dom";

const activities = [
    {
        image: activity1,
        title: "Losing Weight - Day 15",
        duration: "60 min",
        calories: "291 kcal",
        videoList: [
            {src: "https://www.youtube.com/watch?v=cbKkB3POqaY", title: "Body Saw"},
            {src: "https://www.youtube.com/watch?v=i6TzP2COtow", title: "Push Ups"}
        ]
    },
    {
        image: activity2,
        title: "Jump Rope",
        duration: "30 min",
        calories: "115 kcal",
        videoList: [
            {src: "https://www.youtube.com/watch?v=WnSr8w4QEWo", title: "Flexibility"},
            {src: "https://www.youtube.com/watch?v=48jIXvwXmeQ", title: "Daily Stretch"}
        ]
    },
];

const TodayActivities = () => {

    const navigate = useNavigate();

    const activityClickHandler = useCallback((videoList) => {
        navigate("/workout-player", {
            state: {
                videoList: videoList,
            }
        });
    }, [navigate])

    return (
        <div className="today-activities">
            <h4 className="title">Today Activities</h4>
            <p className="total-time">1h 30 min</p>
            <div className="activity-list">
                {activities.map((act, index) => (
                    <div key={index} className="activity-item" onClick={() => activityClickHandler(act.videoList)}>
                        <img src={act.image} alt={act.title}/>
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