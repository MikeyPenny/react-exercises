import React from 'react';
import './bottomContainer.css';

export default function BottomContainer(props) {
    return (
        <div className="bottom-container">
            <div className="row-bottom">
                {props.children}
            </div>
        </div>
    )
}