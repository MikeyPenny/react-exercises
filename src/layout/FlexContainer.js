import React from 'react';
import './flexContainer.css';

export default function FlexContainer(props) {
    return (
        <div className="container">
            <div className="row-container">
                {props.children}
            </div>
        </div>
    )
}

