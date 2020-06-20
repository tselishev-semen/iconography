import React from 'react';
import './button.css';

export const Button = ({icon, text}) => {
    return (
        <button type="button" className="button">
            <div className="button__content">
                <span className="button__icon-wrapper">
                {icon}
                </span>
                {text}
            </div>
        </button>
    )
}