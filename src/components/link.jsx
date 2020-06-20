import React from 'react';
import './link.css';

export const Link = ({icon, href, text}) => {
    return (
        <a href={href} className="link" onClick={(e) => e.preventDefault()}>
            <span className="link__content">
                {icon}
                {text}
            </span>
        </a>
    )
}