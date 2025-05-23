import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./index.module.scss";
import WorkoutHistoryCard from "./historyCard";
import {getHistory} from "../../../core/store/sdk/history";

import img1 from "../../../assets/exercises/11.jpg";
import img2 from "../../../assets/exercises/12.jpg";

const workoutsData = [
    {
        date: "Apr 1 2025",
        duration: "1min",
        workouts: [
            {title: "Losing Weight - Day 15", duration: "60 min", calories: "291 kcal", image: img1},
            {title: "Jump Rope", duration: "30 min", calories: "115 kcal", image: img2},
        ],
    },
    {
        date: "Mar 19 2025",
        duration: "1min",
        workouts: [
            {title: "Losing Weight - Day 15", duration: "60 min", calories: "291 kcal", image: img1},
            {title: "Jump Rope", duration: "30 min", calories: "115 kcal", image: img2},
            {title: "Jump Rope", duration: "30 min", calories: "115 kcal", image: img1},
        ],
    },
    {
        date: "Feb 27 2025",
        duration: "1min",
        workouts: [
            {title: "Losing Weight - Day 15", duration: "60 min", calories: "291 kcal", image: img1},
            {title: "Jump Rope", duration: "30 min", calories: "115 kcal", image: img2},
        ],
    },
];

const WorkoutHistoryPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        getHistory()
    }, []);


    return (
        <div className={styles.historyPage}>
            <header className={styles.header}>
                <span className={styles.back} onClick={() => navigate(-1)}>←</span>
                <h2>My Workouts</h2>
            </header>

            <div className={styles.historyList}>
                {workoutsData.map((entry, i) => (
                    <WorkoutHistoryCard
                        key={i}
                        date={entry.date}
                        duration={entry.duration}
                        workouts={entry.workouts}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkoutHistoryPage;
