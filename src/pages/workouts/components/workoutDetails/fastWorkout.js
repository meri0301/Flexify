import React, {useCallback} from "react";
import styles from "./index.module.scss";
import {FaAngleLeft} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

import background from '../../../../assets/exercises/7.jpg';
import img1 from '../../../../assets/fastWorkout/fast1.jpg';
import img2 from '../../../../assets/fastWorkout/fast2.jpg';
import img3 from '../../../../assets/fastWorkout/fast3.jpg';
import img4 from '../../../../assets/fastWorkout/fast4.jpg';

const workouts = [
    { title: "Body Saw", time: "20:00", image: img1 , path: '/bodySaw'},
    { title: "Squats", time: "15:00", image: img2, path: '/squats'},
    { title: "Fast Spider Lunges", time: "25:00", image: img3 , path: '/fastSpiderLunges'},
    { title: "Flutter Kicks", time: "10:00", image: img4, path: '/flutterKicks'},
];

const WorkoutDetailPage = () => {
    const navigate = useNavigate();

    const itemClickHandler = useCallback((path) => {
        let videoList = [];

        if (path === '/bodySaw') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=FGLRgxgG084", title: 'Core Crusher Challenge'},
                {src: "https://www.youtube.com/watch?v=cbKkB3POqaY&t=169s", title: 'Flat Belly Burn'},
            )
        } else if (path === '/squats') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=KhaiBgacxp8&list=PL9jpSjr09H4fGAIbeU1obS0dI_Ugdpts2", title: 'Booty Burn Express'},
                {src: "https://www.youtube.com/watch?v=PewkQ8ImiTk&list=PL9jpSjr09H4fGAIbeU1obS0dI_Ugdpts2&index=2", title: 'Glute Power Pulse'},
                {src: "https://www.youtube.com/watch?v=dIJfQmcDlFE&list=PL9jpSjr09H4fGAIbeU1obS0dI_Ugdpts2&index=3", title: 'Sculpt & Lift Routine'},
            )
        } else if (path === '/fastSpiderLunges') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=vRT8nUn3GfQ&list=PL9jpSjr09H4fGAIbeU1obS0dI_Ugdpts2&index=4", title: 'Arm Sculpt Express'},
                {src: "https://www.youtube.com/watch?v=t_Xan_ew-fQ&list=PL9jpSjr09H4fGAIbeU1obS0dI_Ugdpts2&index=5", title: 'Toned & Tight Triceps'},
                {src: "https://www.youtube.com/watch?v=KNZKnDwSaLQ&list=PL9jpSjr09H4fGAIbeU1obS0dI_Ugdpts2&index=6", title: 'Biceps Burnout Blast'},
            )
        } else if (path === '/flutterKicks') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=aO1boUJhjvk&list=PL9jpSjr09H4fGAIbeU1obS0dI_Ugdpts2&index=7", title: 'Booty Burn Express'},
                {src: "https://www.youtube.com/watch?v=UDl2TZoNcTo&list=PL9jpSjr09H4fGAIbeU1obS0dI_Ugdpts2&index=8", title: 'Glute Power Pulse'},
            )
        }

        navigate(path, {
            state: {
                videoList: videoList
            }
        });
    }, [navigate]);

    return (
        <div className={styles.wrapper}>
            <img
                src={background}
                alt="Fat Burning Hiit Beginner"
                className={styles.headerImage}
            />
            <div className={styles.backButton} onClick={() => navigate(-1)}>
                <FaAngleLeft/>
            </div>

            <div className={styles.card}>
                <p className={styles.week}>WEEK 1 DAY 1</p>
                <h2 className={styles.title}>Fat Burning Hiit Beginner</h2>
                <p className={styles.meta}>2 min &nbsp; • &nbsp; 10 workouts</p>
                <p className={styles.description}>
                    No squatting! These knee friendly workouts hit your glutes from all
                    angles to build a tight and round booty.
                </p>

                <h3 className={styles.listTitle}>Workout List</h3>
                <ul className={styles.workoutList}>
                    {workouts.map((w, i) => (
                        <li key={i} className={styles.workoutItem} onClick={() => itemClickHandler(w.path)}>
                            <img src={w.image} alt={w.title}/>
                            <div>
                                <p>{w.title}</p>
                                <span>{w.time}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkoutDetailPage;
