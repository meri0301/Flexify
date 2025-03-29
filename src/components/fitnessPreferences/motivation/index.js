import React, {memo} from "react";
import PropTypes from "prop-types";
import classNames from './index.module.scss';

const data = [
    {key: 1, name: 'Get Shaped'},
    {key: 2, name: 'Look Better'},
    {key: 3, name: 'Improve health'},
    {key: 4, name: 'Boost Energy'},
    {key: 5, name: 'Feel Confident'},
]

const Motivation = ({selected, onSelect}) => {
    // const change = () => {
    //     console.log('-------')
    // }

    console.log(selected)
    return (
        <div className={classNames.motivationContainer}>
            <span className={classNames.motivationTitle}>What motivates you the most?</span>
            <div className={classNames.motivationContent}>
                {
                    data.map(el => {
                        return (
                            <div
                                className={`${classNames.motivationItems} ${selected === el.key ? classNames.selected : ''}`}
                                key={el.key} onClick={() => onSelect(el.key, 'motivation')}>
                                <input
                                    type="radio"
                                    value={el.key}
                                    name="motivation"
                                    defaultChecked={selected === el.key}
                                    className={classNames.motivationRadioInput}
                                    // onChange={() => onSelect(el.key, 'motivation')}
                                    // onChange={change}
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

Motivation.propTypes = {
    onSelect: PropTypes.func,
    selected: PropTypes.number,
};

export default memo(Motivation);