import React, {memo} from "react";
import Steps from "./steps";
import Exercise from "./exercise";

const Summary = () => {

    return (
        <div className={'summary-container'}>
            <Steps/>
            <Exercise/>
        </div>
    )
}

export default memo(Summary)