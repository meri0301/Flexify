import React, {memo} from "react";
import classNames from './index.module.scss';

import goal1 from '../../../assets/mainGoals/goal3.png';
import goal2 from '../../../assets/mainGoals/goal2.png';
import goal3 from '../../../assets/mainGoals/goal1.png';
import PropTypes from "prop-types";

const data = [
    {key: 1, title: 'Lose Weight', img: goal1},
    {key: 2, title: 'Build Muscle', img: goal2},
    {key: 3, title: 'Keep Fit', img: goal3},
]

const MainGoal = ({selected, onSelect}) => {

    return (
        <div className={classNames.container}>
            <span className={classNames.containerTitle}>What's your main goal?</span>
            <div className={classNames.content}>
                {
                    data.map(el => {
                        return (
                            <div key={el.key}
                                 className={`${classNames.itemContent} ${selected === el.key ? classNames.selected : ''}`}
                                 onClick={() => onSelect(el.key, 'mainGoal')}
                            >
                                <span className={classNames.itemText}>{el.title}</span>
                                <img src={el.img} className={classNames.itemImg}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

MainGoal.propTypes = {
    selected: PropTypes.number,
    onSelect: PropTypes.func,
};

export default memo(MainGoal);