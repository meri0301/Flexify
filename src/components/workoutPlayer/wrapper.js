import { useLocation } from "react-router-dom";
import WorkoutPlayer from "./index";

const WorkoutPlayerWrapper = () => {
    const location = useLocation();

    const videoList = location.state?.videoList || [];

    return (
        <WorkoutPlayer
            videoList={videoList}
        />
    );
};

export default WorkoutPlayerWrapper;