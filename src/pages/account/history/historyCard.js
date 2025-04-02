import React from "react";
import styles from "./index.module.scss";

const WorkoutHistoryCard = ({ date, duration, workouts }) => {
    return (
        <div className={styles.historyCard}>
            <div className={styles.cardHeader}>
                <span>{date}</span>
                <span>{workouts.length} workouts ・ {duration}</span>
            </div>
            <div className={styles.workouts}>
                {workouts.map((w, idx) => (
                    <div key={idx} className={styles.workoutItem}>
                        <img src={w.image} alt="workout" />
                        <div>
                            <strong>{w.title}</strong>
                            <p>{w.duration}. {w.calories}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkoutHistoryCard;