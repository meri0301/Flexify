import React, {memo, useCallback, useRef, useState} from "react";
import PropTypes from "prop-types";
import './index.scss'

const Weight = ({onSelect}) => {
    const [unit, setUnit] = useState("kg");
    const [weight, setWeight] = useState(65);

    const handleUnitChange = (newUnit) => {
        setUnit(newUnit);
    };

    const minWeight = 30;
    const maxWeight = 150;

    const handleScroll = (e) => {
        const scrollValue = e.deltaY > 0 ? -1 : 1;
        setWeight((prev) => {
            const newWeight = prev + scrollValue;
            return Math.min(Math.max(newWeight, minWeight), maxWeight);
        });
    };

    const visibleRange = 1;
    const markings = Array.from({ length: visibleRange * 2 + 1 }, (_, i) => {
        const value = weight - visibleRange + i;
        return value >= minWeight && value <= maxWeight ? value : null;
    }).filter((v) => v !== null);

    const lines = Array.from({ length: (visibleRange * 2 + 1) * 10 + 1 }).map((_, i) => {
        const position = weight * 10 - visibleRange * 10 + i;
        return position % 10 === 0 ? "large" : position % 5 === 0 ? "medium" : "small";
    });

    const useWeightScroll = ({ minWeight, maxWeight, onSelect }) => {
        const touchStartY = useRef(null);

        // Desktop: mouse wheel scroll
        const handleWheel = useCallback((e) => {
            const scrollValue = e.deltaY > 0 ? -1 : 1;
            setWeight((prev) => {
                const newWeight = prev + scrollValue;
                onSelect?.(newWeight, "weight");
                return Math.min(Math.max(newWeight, minWeight), maxWeight);
            });
        }, [minWeight, maxWeight, onSelect]);

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
                setWeight((prev) => {
                    const newWeight = prev + scrollValue;
                    onSelect?.(newWeight, "weight");
                    return Math.min(Math.max(newWeight, minWeight), maxWeight);
                });

                // Reset start to prevent multiple triggers
                touchStartY.current = currentY;
            }
        }, [minWeight, maxWeight, onSelect]);

        return {
            handleWheel,
            handleTouchStart,
            handleTouchMove
        };
    };

    const {
        handleWheel,
        handleTouchStart,
        handleTouchMove
    } = useWeightScroll({ minWeight: 30, maxWeight: 300, onSelect });


    return (
        <div className="height-picker">
            <h2 className="title">What’s Your Current Weight?</h2>
            <div className="unit-toggle">
                <button
                    className={unit === "lbs" ? "active" : ""}
                    onClick={() => handleUnitChange("lbs")}
                >
                    lbs
                </button>
                <button
                    className={unit === "kg" ? "active" : ""}
                    onClick={() => handleUnitChange("kg")}
                >
                    Kg
                </button>
            </div>

            <div className="ruler horizontal" onWheel={handleWheel}
                 onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}>
                <div className="markings-horizontal">
                    {markings.map((mark) => (
                        <div
                            key={mark}
                            className={`mark ${mark === weight ? "current" : ""}`}
                        >
                            {mark}<span>{unit}</span>
                        </div>
                    ))}
                </div>

                <div className="lines-horizontal">
                    {lines.map((size, i) => (
                        <div key={i} className={`line ${size}`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Weight.propTypes = {
    onSelect: PropTypes.func
}

export default memo(Weight)