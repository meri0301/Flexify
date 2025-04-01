import React from "react";
import {FaUser} from "react-icons/fa";
import styles from "./index.module.scss";
import {useNavigate} from "react-router-dom";

const AccountPage = () => {
    const navigate = useNavigate();

    const menuItems = [
        {label: "My Profile", path: "/account/profile"},
        {label: "Reminder", path: "/account/reminder"},
        {label: "My Workouts History", path: "/account/workouts-history"},
        {label: "Privacy Policy", path: "/account/privacy"},
        {label: "Feedback", path: "/account/feedback"},
    ];

    return (
        <div className={styles.accountPage}>
            <div className={styles.statsSection}>
                <div className={styles.statBox}>
                    <span className={styles.label}>Streak</span>
                    <span className={styles.value}>5</span>
                    <span className={styles.unit}>days</span>
                </div>

                <div className={styles.avatarBox}>
                    <div className={styles.avatarCircle}>
                        <FaUser size={20} color="#fff"/>
                    </div>
                    <span className={styles.name}>Meri</span>
                </div>

                <div className={styles.statBox}>
                    <span className={styles.label}>Progress</span>
                    <span className={styles.value}>1.5</span>
                    <span className={styles.unit}>kg</span>
                </div>
            </div>

            <div className={styles.menuList}>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={styles.menuItem}
                        onClick={() => navigate(item.path)}
                    >
                        <span>{item.label}</span>
                        <span className={styles.arrow}>→</span>
                    </div>
                ))}
                <div className={styles.menuItem}>
                    <span>Delete All Data</span>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
