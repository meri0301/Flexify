import React from "react";
import styles from "./index.module.scss";

const BodyFocusItem = ({ image, title, count, onClick, path }) => {
    return (
        <div className={styles.item} onClick={() => onClick(path)}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <span className={styles.title}>{title}</span>
            <span className={styles.count}>{count} workouts</span>
        </div>
    );
};

export default BodyFocusItem;
