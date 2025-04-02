import React, {memo, useState} from "react";
import "./index.scss";
import PropTypes from "prop-types";

const AgePicker = ({onSelect}) => {
    const [age, setAge] = useState(24);
    const minAge = 10;
    const maxAge = 100;

    const handleScroll = (e) => {
        const scrollValue = e.deltaY > 0 ? 1 : -1;
        setAge((prev) => {
            const newAge = prev + scrollValue;
            onSelect && onSelect(newAge, 'age');
            return Math.min(Math.max(newAge, minAge), maxAge);
        });
    };

    const visibleRange = 2;
    const ageList = Array.from({ length: visibleRange * 2 + 1 }, (_, i) => {
        const value = age - visibleRange + i;
        return value >= minAge && value <= maxAge ? value : null;
    }).filter((v) => v !== null);

    return (
        <div className="age-picker">
            <h2 className="title">What’s Your Age?</h2>
            <p className="subtitle">This will help us to adjust the workouts for you age.</p>

            <div className="age-selector" onWheel={handleScroll}>
                {ageList.map((item) => (
                    <div key={item} className={`age-item ${item === age ? "active" : ""}`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

AgePicker.propTypes = {
    onSelect: PropTypes.func,
}

export default memo(AgePicker);
