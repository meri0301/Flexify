import React, {memo, useCallback,useRef, useState} from "react";
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

    const useHeightScroll = ({ minHeight, maxHeight, onSelect }) => {
        const touchStartY = useRef(null);

        // Desktop: mouse wheel scroll
        const handleWheel = useCallback((e) => {
            const scrollValue = e.deltaY > 0 ? -1 : 1;
            setHeight((prev) => {
                const newHeight = prev + scrollValue;
                onSelect?.(newHeight, "height");
                return Math.min(Math.max(newHeight, minHeight), maxHeight);
            });
        }, [minHeight, maxHeight, onSelect]);

        // Mobile: touch swipe up/down
        const handleTouchStart = useCallback((e) => {
            touchStartY.current = e.touches[0].clientY;
        }, []);

        const handleTouchMove = useCallback((e) => {
            if (touchStartY.current === null) return;

            const currentY = e.touches[0].clientY;
            const deltaY = currentY - touchStartY.current;

            // Only react to meaningful swipes (you can adjust 10)
            if (Math.abs(deltaY) > 10) {
                const scrollValue = deltaY > 0 ? 1 : -1;
                setHeight((prev) => {
                    const newHeight = prev + scrollValue;
                    onSelect?.(newHeight, "height");
                    return Math.min(Math.max(newHeight, minHeight), maxHeight);
                });

                // Reset start to prevent multiple triggers
                touchStartY.current = currentY;
            }
        }, [minHeight, maxHeight, onSelect]);

        return {
            handleWheel,
            handleTouchStart,
            handleTouchMove
        };
    };

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

    const {
        handleWheel,
        handleTouchStart,
        handleTouchMove
    } = useHeightScroll({ minHeight: 50, maxHeight: 200, onSelect });


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

            <div className="ruler" onWheel={handleWheel}
                 onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}>
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