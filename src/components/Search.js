import React from 'react';
import './Search.css';

const Search = props => {
    return (
        <div className="search-container">
            <h2>Enter the keyword which you are trying to track</h2>
            <h4>(For multiple keywords, seperate the words with a space)</h4>
            <input
                type="text" 
                onChange={props.handleChange} 
                value={props.value}
            />
            <button onClick={() => props.handleSubmit(props.value)}>Track</button>
        </div>
    )
}

export default Search