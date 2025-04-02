import React from "react";
import styles from "./index.module.scss";

const PopupModal = ({ title, message, onClose, onConfirm, confirmText = "OK", cancelText = "Cancel", showCancel = false }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {title && <h3 className={styles.title}>{title}</h3>}
                <p className={styles.message}>{message}</p>
                <div className={styles.actions}>
                    {showCancel && (
                        <button className={styles.cancelButton} onClick={onClose}>
                            {cancelText}
                        </button>
                    )}
                    <button className={styles.confirmButton} onClick={onConfirm}>
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;