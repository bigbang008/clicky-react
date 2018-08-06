import React from 'react';
import "./Jumbotron.css";

const Jumbotron = (props) => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <img className="center" alt="logo" src={require('../../Photos/logo/Family Guy.png')}/>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    </div>
);

export default Jumbotron;