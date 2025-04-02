import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const PrivacyPolicyPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.privacyPage}>
            <header className={styles.header}>
                <span onClick={() => navigate(-1)} className={styles.backArrow}>←</span>
                <h2>Privacy Policy</h2>
            </header>

            <div className={styles.content}>
                <p>We collect and use your data to personalize your fitness journey, improve the app, and ensure security.</p>

                <h4>What We Collect</h4>
                <ul>
                    <li>Personal Info: Name, email, payment details (secure).</li>
                    <li>Health Data: Activities, goals, and progress.</li>
                    <li>Device Data: Device type, IP usage.</li>
                    <li>Location Data: GPS (optional).</li>
                </ul>

                <h4>How We Use It</h4>
                <ul>
                    <li>Services: Tailor workouts and track progress.</li>
                    <li>Communication: Notify about updates (unsubscribe anytime).</li>
                    <li>Security & Compliance: Protect accounts and meet legal needs.</li>
                </ul>

                <h4>Your Rights</h4>
                <p>Access, update, or delete your data via settings or at support@flexifyapp.com. Opt out of marketing and location tracking anytime.</p>

                <h4>Security & Kids</h4>
                <p>Your data is encrypted but not 100% secure. Flexify is not for children under 13.</p>

                <h4>Contact</h4>
                <p>Email: support@flexifyapp.com<br />
                    Phone: +1-800-123-4567</p>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
