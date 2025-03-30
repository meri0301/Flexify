import React, {memo} from "react";
import Activities from "./activities";
import './index.scss'
import StepAndWaterCard from "./stepAndWaterCard";
import ProgressOverview from "./progressOverview";


const TodayScreen = () => {

    const today = new Date();
    const formatted = today.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    return (
        <div className={'today-container'}>
            <span className={'today-date'}>{formatted}</span>
            <Activities/>
            <StepAndWaterCard/>
            <ProgressOverview/>

        </div>
    )
}

export default memo(TodayScreen)
