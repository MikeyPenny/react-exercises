import React from 'react';
import './home.css';
import BottomContainer from '../layout/BottomContainer';
import Card from './Card';

export default function Home() {
    return (
        <div className="content-container">
            <div className="content-row">
                <h1>Say hello<br/> to ReactJS</h1>
            </div>
            <div className="content-row">
                <p>You will learn a Frontend<br/> framework from scratch, to<br/> become a Ninja Developer</p>
            </div>
            <div className="content-row">
                <button>Awesome!</button>
            </div>
            <BottomContainer>
                <Card path="./assets/icon1.png" title="Decalarative" text="React makes it painless to create interactive  UIs." ></Card>
                <Card path="./assets/icon2.png" title="Components" text="Build encapsulated components that manage their state." ></Card>
                <Card path="./assets/icon3.png" title="Single-Way" text="A set of inmutablevalues are passed to the component." ></Card>
                <Card path="./assets/icon4.png" title="Decalarative" text="Statically-typed, designed to run on modern browsers." ></Card>
            </BottomContainer>
        </div>
    )
}
