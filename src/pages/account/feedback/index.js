import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { FiCamera } from "react-icons/fi";
import Button from "../../../components/button";

const FeedbackPage = () => {
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState("");
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = () => {
        // You can send feedback and image to server here
        console.log("Feedback:", feedback);
        console.log("Image:", image);
        setFeedback("");
        setImage(null);
    };

    return (
        <div className={styles.feedbackPage}>
            <header className={styles.header}>
                <span onClick={() => navigate(-1)} className={styles.backArrow}>←</span>
                <h2>Feedback</h2>
            </header>

            <span className={styles.question}>What are you not satisfied with?</span>

            <div className={styles.formBox}>
        <textarea
            placeholder="Please tell us more details so that we can locate and solve your problem faster"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
        />
                <label className={styles.imageUpload}>
                    <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
                    {image ? (
                        <img src={image} alt="Uploaded" />
                    ) : (
                        <FiCamera className={styles.cameraIcon} />
                    )}
                </label>
            </div>

            <Button disabled={!feedback.trim()} onClick={handleSubmit} title={'+ Add'} classNames={`color-1 ${styles.submitButton}`}/>
        </div>
    );
};

export default FeedbackPage;
