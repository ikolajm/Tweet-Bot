import React from 'react';
import './Header.css';
let bird = require('../assets/bird.png')

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <img src={bird} alt='Dark Twitter bird' />
                <h1>TweetSpy</h1>
            </header>
        </React.Fragment>
    )
}

export default Header;