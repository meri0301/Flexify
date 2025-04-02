import React, {useState} from "react";
import {FaUser} from "react-icons/fa";
import styles from "./index.module.scss";
import {useNavigate} from "react-router-dom";

const MyProfilePage = () => {
    const [unit, setUnit] = useState("kg");
    const navigate = useNavigate();

    const heightCm = 170;
    const weightKg = 65;

    const convertWeight = () => {
        return unit === "kg" ? weightKg : (weightKg * 2.20462).toFixed(1);
    };

    const convertHeight = () => {
        return unit === "kg" ? `${heightCm} cm` : `${(heightCm / 2.54).toFixed(1)} in`;
    };

    return (
        <div className={styles.profilePage}>
            <header className={styles.header}>
                <span className={styles.back} onClick={() => navigate(-1)}>←</span>
                <h2>My Profile</h2>
            </header>

            <div className={styles.avatarBox}>
                <div className={styles.avatarCircle}><FaUser color="#fff"/></div>
                <span className={styles.name}>Meri</span>
            </div>

            <div className={styles.toggleRow}>
                  <span
                      onClick={() => setUnit("lbs")}
                      className={unit === "lbs" ? styles.active : ""}
                  >
                    lbs
                  </span>
                 <span
                    onClick={() => setUnit("kg")}
                    className={`${unit === "kg" ? styles.active : ""}`}
                 >
                    Kg
                </span>
            </div>

            <div className={styles.infoRow}>
                <span>Height</span>
                <span className={styles.orange}>{convertHeight()}</span>
            </div>
            <div className={styles.infoRow}>
                <span>Weight</span>
                <span className={styles.orange}>{convertWeight()} {unit}</span>
            </div>
            <div className={styles.infoRow}>
                <span>Year of Birth</span>
                <span className={styles.orange}>2000</span>
            </div>
        </div>
    );
};

export default MyProfilePage;