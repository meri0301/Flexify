import React, {memo, useCallback} from "react";
import './index.scss';
import PropTypes from "prop-types";

const Button = ({title, getIcon, disabled, classNames, onClick}) => {

    const clickHandler = useCallback(() => {
        !disabled && onClick?.();
    }, [disabled, onClick])

    return (
        <div
            onClick={clickHandler}
            className={`button ${classNames} ${disabled ? 'disabled' : ''}`}
        >
            {getIcon && getIcon()}
            <span>{title}</span>
        </div>
    )
}

Button.propTypes = {
    getIcon: PropTypes.func,
    onClick: PropTypes.func,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    classNames: PropTypes.string,
}

export default memo(Button);