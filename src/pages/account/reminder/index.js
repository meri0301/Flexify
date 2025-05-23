import React, {useEffect, useState} from "react";
import styles from "./index.module.scss";
import {useNavigate} from "react-router-dom";
import {FaTrashAlt} from "react-icons/fa";
import Button from "../../../components/button";
import {deleteReminder, postReminder} from "../../../core/store/sdk/reminder";

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

const ReminderPage = () => {
    const navigate = useNavigate();

    const [reminders, setReminders] = useState(() => {
        const saved = localStorage.getItem("reminders");
        return saved ? JSON.parse(saved) : [
            {time: "20:00", days: [1, 2, 3, 5], enabled: true}
        ];
    });

    const [showPicker, setShowPicker] = useState(false);
    const [tempTime, setTempTime] = useState({hour: 6, minute: 24});
    const [tempDays, setTempDays] = useState([1, 2, 3]);

    // push notification

    useEffect(() => {
        if ("Notification" in window && Notification.permission !== "granted") {
            Notification.requestPermission();
        }

    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
            const today = now.getDay(); // 0 (Sun) - 6 (Sat)

            reminders.forEach((reminder) => {
                if (
                    reminder.enabled &&
                    reminder.time === currentTime &&
                    reminder.days.includes(today)
                ) {
                    showNotification(reminder.time);
                }
            });
        }, 60000); // every minute

        return () => clearInterval(interval);
    }, [reminders]);

    const showNotification = (time) => {
        if (Notification.permission === "granted") {
            new Notification("Workout Reminder 💪", {
                body: `It's ${time} — time to get moving!`,
            });
        }
    };

    useEffect(() => {
        postReminder();
        localStorage.setItem("reminders", JSON.stringify(reminders));
    }, [reminders]);

    const toggleDay = (dayIndex) => {
        setTempDays((prev) =>
            prev.includes(dayIndex)
                ? prev.filter((d) => d !== dayIndex)
                : [...prev, dayIndex]
        );
    };

    const applyReminder = () => {
        const newReminder = {
            time: `${String(tempTime.hour).padStart(2, "0")}:${String(tempTime.minute).padStart(2, "0")}`,
            days: [...tempDays],
            enabled: true,
        };
        setReminders([...reminders, newReminder]);
        setShowPicker(false);
    };

    const toggleSwitch = (index) => {
        const updated = [...reminders];
        updated[index].enabled = !updated[index].enabled;
        setReminders(updated);
    };

    const deleteReminders = (index) => {
        deleteReminder();
        const updated = reminders.filter((_, i) => i !== index);
        setReminders(updated);
    };

    return (
        <div className={styles.reminderPage}>
            <header className={styles.header}>
                <span onClick={() => navigate(-1)}>←</span>
                <h2>Reminder</h2>
            </header>

            <h4 className={styles.title}>Weekly Workout Time</h4>

            <div className={styles.scrollContainer}>
                {reminders.map((reminder, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.timeRow}>
                            <span className={styles.time}>{reminder.time}</span>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    checked={reminder.enabled}
                                    onChange={() => toggleSwitch(index)}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <div className={styles.daysRow}>
                            <span className={styles.repeat}>Repeat remind me</span>
                            <span className={styles.selectedDays}>
                {reminder.days.map((d) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d]).join(", ")}
              </span>
                        </div>
                        <button className={styles.deleteButton} onClick={() => deleteReminders(index)}><FaTrashAlt/>
                        </button>
                    </div>
                ))}
            </div>

            <Button classNames={`color-1 ${styles.addButton}`} title={'+ Add'} onClick={() => setShowPicker(true)}/>

            {showPicker && (
                <>
                    <div className={styles.overlay} onClick={() => setShowPicker(false)}></div>
                    <div className={styles.pickerModal}>
                        <div className={styles.pickerHeader}>
                            <h3>Reminder</h3>
                            <span onClick={() => setShowPicker(false)}>×</span>
                        </div>

                        <div className={styles.timePicker}>
                            <div className={styles.column}>
                                {Array.from({length: 24}, (_, h) => (
                                    <div
                                        key={h}
                                        className={`${styles.option} ${tempTime.hour === h ? styles.active : ""}`}
                                        onClick={() => setTempTime({...tempTime, hour: h})}
                                    >
                                        {String(h).padStart(2, "0")}
                                    </div>
                                ))}
                            </div>
                            <div className={styles.column}>
                                {Array.from({length: 60}, (_, m) => (
                                    <div
                                        key={m}
                                        className={`${styles.option} ${tempTime.minute === m ? styles.active : ""}`}
                                        onClick={() => setTempTime({...tempTime, minute: m})}
                                    >
                                        {String(m).padStart(2, "0")}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.weekdays}>
                            {weekdays.map((day, i) => (
                                <div
                                    key={i}
                                    className={`${styles.day} ${tempDays.includes(i) ? styles.selected : ""}`}
                                    onClick={() => toggleDay(i)}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        <button className={styles.setReminderButton} onClick={applyReminder}>
                            Set Reminder
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ReminderPage;
