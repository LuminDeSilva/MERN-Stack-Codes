import React from 'react';
import './welcome.css';

function Welcome(props){
    return (
        <>
            <div className="welcome">
                <h1>Hello, {props.name}!</h1>
                <h2>Age: {props.age}</h2>
                <p>Welcome to the world of React!</p>
            </div>
        </>
    )
} 

export default Welcome;