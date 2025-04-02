import React, {useCallback} from "react";
import styles from "./index.module.scss";
import {FaAngleLeft} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

import background from '../../../../assets/exercises/8.jpg';
import img1 from '../../../../assets/pilatesWorkout/pilates1.jpg';
import img2 from '../../../../assets/pilatesWorkout/pilates2.jpg';
import img3 from '../../../../assets/pilatesWorkout/pilates3.jpg';
import img4 from '../../../../assets/pilatesWorkout/pilates4.jpg';

const workouts = [
    { title: "Core & Abs Focus", time: "20:00", image: img1 , path: '/coreAbs'},
    { title: "Lower Body & Glutes", time: "15:00", image: img2, path: '/lowerBody'},
    { title: "Full Body Flow", time: "25:00", image: img3 , path: '/fullBodyPilates'},
    { title: "Upper Body & Arms", time: "10:00", image: img4, path: '/upperBody'},
];

const WorkoutDetailPage = () => {
    const navigate = useNavigate();

    const itemClickHandler = useCallback((path) => {
        let videoList = [];

        if (path === '/coreAbs') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=U6niiU5595Y&list=PLipSZg1JNsC_awPIraMlqrga97vKiyh43&index=3", title: 'Core Crusher Challenge'},
            )
        } else if (path === '/lowerBody') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=Vcvpwmu8FxQ&list=PL3D3ysBMhKYWy8CL_rdeA9922GD2hmtgQ", title: 'Booty Burn Express'},
                {src: "https://www.youtube.com/watch?v=xtBnCpVOZ-c&list=PL3D3ysBMhKYWy8CL_rdeA9922GD2hmtgQ&index=2", title: 'Glute Power Pulse'},
            )
        } else if (path === '/fullBodyPilates') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=_VYxsEYJ6d0&list=PL3D3ysBMhKYWy8CL_rdeA9922GD2hmtgQ&index=3", title: 'Arm Sculpt Express'},
                {src: "https://www.youtube.com/watch?v=ibmbAWadDqQ&list=PL3D3ysBMhKYWy8CL_rdeA9922GD2hmtgQ&index=4", title: 'Toned & Tight Triceps'},
            )
        } else if (path === '/upperBody') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=ECn65drDmFQ&list=PL3D3ysBMhKYWy8CL_rdeA9922GD2hmtgQ&index=5", title: 'Booty Burn Express'},
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
                alt="Pilates Sculpt"
                className={styles.headerImage}
            />
            <div className={styles.backButton} onClick={() => navigate(-1)}>
                <FaAngleLeft/>
            </div>

            <div className={styles.card}>
                <p className={styles.week}>WEEK 1 DAY 1</p>
                <h2 className={styles.title}>Pilates Sculpt</h2>
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
