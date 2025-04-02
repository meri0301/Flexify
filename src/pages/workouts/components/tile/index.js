import React from "react";
import styles from "./index.module.scss";

const WorkoutTile = ({ image, title, onClick, path }) => {
    return (
        <div className={styles.tile} onClick={() => onClick(path)}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.textWrapper}>
                <h4 className={styles.title}>{title}</h4>
                <span className={styles.start}>Start</span>
            </div>
        </div>
    );
};

export default WorkoutTile;
