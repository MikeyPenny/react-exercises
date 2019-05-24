import React from 'react';
import './card.css';

function Card(props) {
    return (
        <div className="card-container">
            <img src={props.path} alt="cardImg"/>
            <h1>{props.title}</h1>
            <div className="text-card" >
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Card;