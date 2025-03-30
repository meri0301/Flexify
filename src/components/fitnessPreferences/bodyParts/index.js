import './index.scss';
import React, {memo} from "react";

import backgroundImg from '../../../assets/athlete.png';
import PropTypes from "prop-types";

const data = [
    {title: "Total Arms", position: "top-left", key: 1},
    {title: "Flat Abs", position: "middle-left", key: 2},
    {title: "Full Body", position: "top-right", key: 3},
    {title: "Bubble Butt", position: "middle-right", key: 4},
    {title: "Slim Legs", position: "bottom-right", key: 5},
];


const BodyParts = ({selected, onSelect}) => {

    return (
        <div className="body-parts-container">
            <h2 className="body-parts-container-title">Which area would you like to focus on?</h2>
            <div className="body-parts-image-container">
                <img src={backgroundImg} alt="Fitness Focus" className="body-parts-image"/>
                {data.map((el, index) => (
                    <button
                        key={index}
                        className={`body-parts-focus-button ${el.position} ${
                            selected === el.title ? "selected" : ""
                        }`}
                        onClick={() => onSelect(el.title, 'bodyParts')}
                    >
                        {el.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

BodyParts.propTypes = {
    selected: PropTypes.number,
    onSelect: PropTypes.func,
}

export default memo(BodyParts);