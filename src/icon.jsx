import React from 'react';
import './icon.css';

export const makeIcon = (IconComponent, {transform} = {}) => {
    return ({size = 20}) => (
        <IconComponent
            focusable="false"
            aria-hidden="true"
            role="img"
            style={{height: size, width: size}}
            className="icon"
            transform={transform}
        />
    );
};