import React, {useCallback} from "react";
import styles from "./index.module.scss";

import img1 from '../../assets/exercises/1.jpg';
import img2 from '../../assets/exercises/2.jpg';
import img3 from '../../assets/exercises/3.png';
import img4 from '../../assets/exercises/4.png';
import img5 from '../../assets/exercises/5.png';
import img6 from '../../assets/exercises/6.png';
import img7 from '../../assets/exercises/7.jpg';
import img8 from '../../assets/exercises/8.jpg';
import img9 from '../../assets/exercises/9.jpg';
import img10 from '../../assets/exercises/10.jpg';
import img13 from '../../assets/exercises/13.jpg';
import Tile from "./components/tile";
import BodyFocus from "./components/bodyFocus";
import {useNavigate} from "react-router-dom";

const WorkoutsPage = () => {
    const navigate = useNavigate();

    const tileClickHandler = useCallback((path) => {
        let videoList = [];

        if (path === '/indoorWalking') {
            videoList.push({
                src: "https://www.youtube.com/watch?v=uT_ZNnGXuYA", title: 'Indoor Walking'
            })
        } else {
            videoList.push({
                src: "https://www.youtube.com/watch?v=x0UKQEG-mi4", title: 'Back Workout'
            })
        }

        navigate(path, {
            state: {
                videoList: videoList
            }
        });
    }, [navigate]);

    const bodyFocusHandler = useCallback((path) => {
        let videoList = [];

        if (path === '/abs') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=2pLT-olgUJs", title: 'Core Crusher Challenge'},
                {src: "https://www.youtube.com/watch?v=AnYl6Nk9GOA", title: 'Flat Belly Burn'},
                {src: "https://www.youtube.com/watch?v=1f8yoFFdkcY", title: '10-Minute Ab Sculpt'},
                {src: "https://www.youtube.com/watch?v=AvWVYgzH_f4", title: 'Plank & Crunch Power Set'},
            )
        } else if (path === '/butt') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=W11lPLTFlBI&t=246s", title: 'Booty Burn Express'},
                {src: "https://www.youtube.com/watch?v=p-uUnrCdhR8", title: 'Glute Power Pulse'},
                {src: "https://www.youtube.com/watch?v=tC2PuvibB7w", title: 'Sculpt & Lift Routine'},
                {src: "https://www.youtube.com/watch?v=D_IfSPyTwRE", title: 'Strong Peach Circuit'},
                {src: "https://www.youtube.com/watch?v=9SuTAxJGQuY", title: 'Tight & Toned Booty Blast'},
            )
        } else if (path === '/arm') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=Y346900i9qE", title: 'Arm Sculpt Express'},
                {src: "https://www.youtube.com/watch?v=j64BBgBGNIU", title: 'Toned & Tight Triceps'},
                {src: "https://www.youtube.com/watch?v=rA52LE82L90", title: 'Biceps Burnout Blast'},
            )
        } else if (path === '/leg') {
            videoList.push(
                {src: "https://www.youtube.com/watch?v=ZZI__bqlBkQ", title: 'Booty Burn Express'},
                {src: "https://www.youtube.com/watch?v=nG69wuXHwxg", title: 'Glute Power Pulse'},
                {src: "https://www.youtube.com/watch?v=Yx0BW-H5W0Y", title: 'Sculpt & Lift Routine'},
                {src: "https://www.youtube.com/watch?v=YJYhoFND24o", title: 'Strong Peach Circuit'},
                {src: "https://www.youtube.com/watch?v=jjBlfnmTwW4", title: 'Tight & Toned Booty Blast'},
                {src: "https://www.youtube.com/watch?v=Fu_oExrPX68", title: 'Tight & Toned Booty Blast'},
            )
        }

        navigate(path, {
            state: {
                videoList: videoList
            }
        });

    }, [navigate])

    const fastWorkoutHandler = useCallback(() => {
        navigate('/fastWorkout')
    }, [navigate]);

    const pilatesClickHandler = useCallback(() => {
        navigate('/pilates')
    }, [navigate]);

    const morningStretchClickHandler = useCallback(() => {
        navigate('/morningStretch', {
            state: {
                videoList: [{src: 'https://www.youtube.com/watch?v=LMCjhH32-0Q', title: 'Booty and Legs'}]
            }
        })
    }, [navigate])

    const tonedArmsClickHandler = useCallback(() => {
        navigate('/tonedArms', {
            state: {
                videoList: [{src: 'https://www.youtube.com/watch?v=aCzd-OsnIJQ&list=PL3D3ysBMhKYUoYrU86vzq1EH2WYItHyV3&index=2', title: 'Standing Arm'}]
            }
        })
    }, [navigate])

    const sleepyTimeClickHandler = useCallback(() => {
        navigate('/sleepyTime', {
            state: {
                videoList: [{src: 'https://www.youtube.com/watch?v=1Hpn-ckBxtg&list=PL3D3ysBMhKYUoYrU86vzq1EH2WYItHyV3&index=3', title: 'Mighty Ab Burn'}]
            }
        })
    }, [navigate])

    return (
        <div className={styles.pageWrapper}>

            <h3>Workouts</h3>
            <div className={styles.tileContent}>
                <div className={styles.tileContent2}>
                    <Tile image={img1} title={'INDOOR WALKING'} path={'/indoorWalking'} onClick={tileClickHandler}/>
                    <Tile image={img2} title={'BACK WORKOUT'} path={'/backWorkout'} onClick={tileClickHandler}/>
                </div>
            </div>

            <h3>Body Focus</h3>
            <div className={styles.bodyFocusContent}>
                <BodyFocus image={img6} title={'ABS'} count={4} path={'/abs'} onClick={bodyFocusHandler}/>
                <BodyFocus image={img3} title={'BUTT'} count={5} path={'/butt'} onClick={bodyFocusHandler}/>
                <BodyFocus image={img4} title={'ARM'} count={3} path={'/arm'} onClick={bodyFocusHandler}/>
                <BodyFocus image={img5} title={'LEG'} count={6} path={'/leg'} onClick={bodyFocusHandler}/>
            </div>

            <h3>Fast</h3>
            <div className={styles.fastAndPilatesContent} onClick={fastWorkoutHandler}>
                <img src={img7}/>
                <span>Fat Burning Hit Beginner</span>
                <span className={styles.duration}>35 min</span>
            </div>

            <h3>Pilates Sculpt</h3>
            <div className={styles.fastAndPilatesContent} onClick={pilatesClickHandler}>
                <img src={img8}/>
                <span>Full Body Pilates Flow</span>
                <span className={styles.duration}>35 min</span>
            </div>

            <h3>Stretch</h3>
            <div className={styles.stretchContainer}>
                <div className={styles.stretchContent}>

                    <div className={styles.stretchItem} onClick={morningStretchClickHandler}>
                        <img src={img9}/>
                        <span>Morning Stretch</span>
                        <span className={styles.duration}>20 min</span>
                    </div>

                    <div className={styles.stretchItem} onClick={tonedArmsClickHandler}>
                        <img src={img10}/>
                        <span>Toned Arms</span>
                        <span className={styles.duration}>10 min</span>
                    </div>

                    <div className={styles.stretchItem} onClick={sleepyTimeClickHandler}>
                        <img src={img13}/>
                        <span>Sleepy Time</span>
                        <span className={styles.duration}>15 min</span>
                    </div>

                </div>

            </div>


        </div>

    );
};

export default WorkoutsPage;