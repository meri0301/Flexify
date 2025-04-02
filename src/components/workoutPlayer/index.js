import React, {useRef, useState} from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import {useNavigate} from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const WorkoutPlayer = ({videoList = [], onBackClick}) => {
    const videoRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const navigate = useNavigate();
    const playerRef = useRef(null);

    const currentVideo = videoList[currentIndex];
    const getYouTubeId = (url) => {
        const regex =
            /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const videoId = getYouTubeId(currentVideo?.src);

    const handleReady = (event) => {
        playerRef.current = event.target;
        setDuration(playerRef.current.getDuration());
        playerRef.current.playVideo();
    };

    const togglePlayPause = () => {
        if (!playerRef.current) return;

        if (isPlaying) {
            playerRef.current.pauseVideo();
        } else {
            playerRef.current.playVideo();
        }

        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        if (currentIndex < videoList.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsPlaying(true);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsPlaying(true);
        }
    };

    // Poll current time (simulate onTimeUpdate)
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (playerRef.current && isPlaying) {
                setCurrentTime(playerRef.current.getCurrentTime());
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying]);

    const backClickHandler = () => {
        navigate(-1);
    }

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    };

    const radius = 34;
    const circumference = 2 * Math.PI * radius;

    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < videoList.length - 1;

    return (
        <div className={styles["workout-player"]}>
            <header className={styles.header}>
                <span className={styles.back}><IoArrowBack size={24} onClick={backClickHandler}/></span>
            </header>

            <div className={styles["video-wrapper"]}>
                {/*<video*/}
                {/*    ref={videoRef}*/}
                {/*    onLoadedMetadata={handleLoadedMetadata}*/}
                {/*    onTimeUpdate={handleTimeUpdate}*/}
                {/*    autoPlay*/}
                {/*    muted*/}
                {/*    playsInline*/}
                {/*    className={styles.video}*/}
                {/*    key={currentVideo?.src} // force reload when src changes*/}
                {/*>*/}
                {/*    <source src={`${currentVideo?.src}?v=${currentIndex}`} type="video/mp4" />*/}
                {/*</video>*/}

                {/*<iframe*/}
                {/*    width="100%"*/}
                {/*    height="100%"*/}
                {/*    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0`}*/}
                {/*    frameBorder="0"*/}
                {/*    allow="autoplay; encrypted-media"*/}
                {/*    allowFullScreen*/}
                {/*></iframe>*/}

                {videoId && (
                    <YouTube
                        videoId={videoId}
                        onReady={handleReady}
                        opts={{
                            width: "100%",
                            height: "500px",
                            playerVars: {
                                autoplay: 1,
                                controls: 0,
                                rel: 0,
                                modestbranding: 1,
                                showinfo: 0,
                                mute: 1,
                            },
                        }}
                    />
                )}

                <p className={styles.step}>{`${currentIndex + 1}/${videoList.length}`}</p>
            </div>

            <div className={styles["info-section"]}>
                <h2 className={styles.title}>{currentVideo?.title || ""}</h2>
                <h1 className={styles.timer}>
                    {formatTime(duration - currentTime)}
                </h1>
                <div className={styles["progress-control"]}>
                    <button className={`${styles["nav-btn"]} ${styles["right-btn"]} ${hasPrev ? styles.orange : styles.disabled}`} onClick={handlePrev}>❮</button>
                    <svg width="80" height="80">
                        <circle cx="40"
                                cy="40"
                                r={radius}
                                stroke="#ffece4"
                                strokeWidth="8"
                                fill="none"/>
                        <circle
                            cx="40"
                            cy="40"
                            r={radius}
                            stroke="#ff7a00"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference * (1 - progress / 100)}
                            strokeLinecap="round"
                            transform="rotate(-90 40 40)"
                        />
                    </svg>
                    <button className={styles["pause-btn"]} onClick={togglePlayPause}>
                        {isPlaying ? "❚❚" : "▶"}
                    </button>
                    <button className={`${styles["nav-btn"]} ${styles.orange} ${styles["left-btn"]} ${!hasNext ? styles["disabled"] : ""}`}
                            onClick={handleNext}>❯
                    </button>

                </div>

                {/*<div className={styles["nav-controls"]}>*/}
                {/*    <button className={styles["nav-btn"]} onClick={handlePrev}>❮</button>*/}
                {/*    <button className={`${styles["nav-btn"]} ${styles.orange}`} onClick={handleNext}>❯</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

WorkoutPlayer.propTypes = {
    onBackClick: PropTypes.func,
}

export default WorkoutPlayer;