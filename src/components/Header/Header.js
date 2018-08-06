import React from 'react';
import "./Header.css";

const Header = (props) => (
    <nav className="navbar sticky-top">
        <h1>Family Guy Clicky Game</h1>
        <div>
            <h2> Score:{props.score} --|-- Top Score: {props.topscore}</h2>
        </div>
    </nav>
);

export default Header;