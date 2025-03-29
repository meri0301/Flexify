import React, {useState, useEffect, memo, useCallback} from "react";
import PropTypes from "prop-types";
import "./index.scss";

function CustomCarousel({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);

    useEffect(() => {
        if (slideDone) {
            setSlideDone(false);
            setTimeID(
                setTimeout(() => {
                    slideNext();
                    setSlideDone(true);
                }, 3000)
            );
        }
        return () => {
            if (timeID) {
                clearTimeout(timeID);
            }
        };
    }, [slideDone, timeID]);

    const slideNext = useCallback(() => {
        setActiveIndex((val) => (val >= data.length - 1 ? 0 : val + 1));
    }, [data]);

    const autoPlayStop = useCallback(() => {
        if (timeID) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    }, [timeID]);

    const autoPlayStart = useCallback(() => {
        if (!slideDone) {
            setSlideDone(true);
        }
    }, [slideDone]);

    return (
        <div
            className="containerSlider"
            onMouseEnter={autoPlayStop}
            onMouseLeave={autoPlayStart}
        >
            {data.map((item, index) => (
                <div
                    className={"sliderItem sliderItemActive-" + (activeIndex + 1)}
                    key={index}
                >
                    <img src={item.imgURL} alt={`Slide ${index}`} />
                </div>
            ))}

            <div className="containerSliderLinks">
                {data.map((_, index) => (
                    <button
                        key={index}
                        className={
                            activeIndex === index
                                ? "containerSliderLinksSmall containerSliderLinksSmallActive"
                                : "containerSliderLinksSmall"
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveIndex(index);
                        }}
                    ></button>
                ))}
            </div>
        </div>
    );
}

CustomCarousel.propTypes = {
    data: PropTypes.array,
};

export default memo(CustomCarousel);