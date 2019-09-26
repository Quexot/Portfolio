import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

const Button = ({
    children, onClick, className, disabled, active, ...attrs
}) => {

    const classes = classNames (
        'btn',
        className,
        { active },
    );

    const Tag = attrs.href ? 'a' : 'button';

    return (
        <Tag
          {...attrs}
          className={classes}
          disabled={disabled}
          onClick={onClick}
        >{children}</Tag>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
};

export default Button;