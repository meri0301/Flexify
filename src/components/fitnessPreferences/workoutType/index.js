import React, {memo} from "react";
import PropTypes from "prop-types";
import classNames from './index.module.scss';

const data = [
    {key: 1, name: 'No Equipments'},
    {key: 2, name: 'No Jumping'},
    {key: 3, name: 'More Lying Exercises'},
    {key: 4, name: 'Less push-ups'},
]

const WorkoutType = ({selected, onSelect}) => {

    return (
        <div className={classNames.motivationContainer}>
            <span className={classNames.motivationTitle}>What motivates you the most?</span>
            <div className={classNames.motivationContent}>
                {
                    data.map(el => {
                        return (
                            <div
                                className={`${classNames.motivationItems} ${selected === el.key ? classNames.selected : ''}`}
                                key={el.key} onClick={() => onSelect(el.key, 'workoutType')}>
                                <input
                                    type="radio"
                                    value={el.key}
                                    name="motivation"
                                    defaultChecked={selected === el.key}
                                    className={classNames.motivationRadioInput}
                                />
                                <span className={classNames.radioCircle}></span>
                                <span className={classNames.motivationItemText}>{el.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

WorkoutType.propTypes = {
    onSelect: PropTypes.func,
    selected: PropTypes.number,
};

export default memo(WorkoutType);