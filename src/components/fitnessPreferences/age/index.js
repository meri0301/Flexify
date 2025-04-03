import React, {memo, useCallback, useRef, useState} from "react";
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

    const useAgeScroll = ({ minAge, maxAge, onSelect }) => {
        const touchStartY = useRef(null);

        // Desktop: mouse wheel scroll
        const handleWheel = useCallback((e) => {
            const scrollValue = e.deltaY > 0 ? -1 : 1;
            setAge((prev) => {
                const newAge = prev + scrollValue;
                onSelect?.(newAge, "age");
                return Math.min(Math.max(newAge, minAge), maxAge);
            });
        }, [minAge, maxAge, onSelect]);

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
                setAge((prev) => {
                    const newAge = prev + scrollValue;
                    onSelect?.(newAge, "age");
                    return Math.min(Math.max(newAge, minAge), maxAge);
                });

                // Reset start to prevent multiple triggers
                touchStartY.current = currentY;
            }
        }, [minAge, maxAge, onSelect]);

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
    } = useAgeScroll({ minAge: 10, maxAge: 100, onSelect });


    const visibleRange = 2;
    const ageList = Array.from({ length: visibleRange * 2 + 1 }, (_, i) => {
        const value = age - visibleRange + i;
        return value >= minAge && value <= maxAge ? value : null;
    }).filter((v) => v !== null);

    return (
        <div className="age-picker">
            <h2 className="title">What’s Your Age?</h2>
            <p className="subtitle">This will help us to adjust the workouts for you age.</p>

            <div className="age-selector" onWheel={handleWheel}
                 onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}>
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
