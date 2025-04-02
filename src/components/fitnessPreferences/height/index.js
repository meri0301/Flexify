import React, {memo, useCallback, useState} from "react";
import PropTypes from "prop-types";
import './index.scss'

const Height = ({onSelect}) => {
    const [unit, setUnit] = useState("cm");
    const [height, setHeight] = useState(170);

    const handleUnitChange = (newUnit) => {
        setUnit(newUnit);
    };

    const minHeight = 100;
    const maxHeight = 220;

    const handleScroll = useCallback((e) => {
        const scrollValue = e.deltaY > 0 ? -1 : 1;
        setHeight((prev) => {
            const newHeight = prev + scrollValue;
            onSelect && onSelect(newHeight, 'height')
            return Math.min(Math.max(newHeight, minHeight), maxHeight);
        });
    }, [minHeight, maxHeight, onSelect]);

    const visibleRange = 1;
    const markings = Array.from({ length: visibleRange * 2 + 1 }, (_, i) => {
        const value = height - visibleRange + i;
        return value >= minHeight && value <= maxHeight ? value : null;
    }).filter((v) => v !== null);

    const lines = Array.from({ length: (visibleRange * 2 + 1) * 10 + 1 }).map((_, i) => {
        const position = height * 10 - visibleRange * 10 + i;
        return position % 10 === 0 ? "large" : position % 5 === 0 ? "medium" : "small";
    });

    return (
        <div className="height-picker">
            <h2 className="title">What’s Your Height?</h2>
            <div className="unit-toggle">
                <button
                    className={unit === "pt" ? "active" : ""}
                    onClick={() => handleUnitChange("pt")}
                >
                    Pt
                </button>
                <button
                    className={unit === "cm" ? "active" : ""}
                    onClick={() => handleUnitChange("cm")}
                >
                    Cm
                </button>
            </div>

            <div className="ruler" onWheel={handleScroll}>
                <div className="markings">
                    {markings.map((mark) => (
                        <div
                            key={mark}
                            className={`mark ${mark === height ? "current" : ""}`}
                        >
                            {mark}
                            <span>{unit}</span>
                        </div>
                    ))}
                </div>
                <div className="lines">
                    {lines.map((size, i) => (
                        <div key={i} className={`line ${size}`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Height.propTypes = {
    onSelect: PropTypes.func,
    selected: PropTypes.number,
}

export default memo(Height);