import {memo} from "react";
import classNames from './index.module.scss';

import goal1 from '../../../assets/mainGoals/goal3.png';
import goal2 from '../../../assets/mainGoals/goal2.png';
import goal3 from '../../../assets/mainGoals/goal1.png';

const data = [
    {key: 1, title: 'Lose Weight', img: goal1},
    {key: 2, title: 'Build Muscle', img: goal2},
    {key: 3, title: 'Keep Fit', img: goal3},
]

const MainGoal = ({}) => {

    return (
        <div className={classNames.container}>
            <span className={classNames.containerTitle}>What's your main goal?</span>
            <div className={classNames.content}>
                {
                    data.map(el => {
                        return (
                            <div key={el.key} className={`${classNames.itemContent}`}>
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

MainGoal.propTypes = {};

export default memo(MainGoal);