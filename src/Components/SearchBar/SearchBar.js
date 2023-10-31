import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar() {

    function handleSubmit(event) {
        event.preventDefault();
       
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter A Song Title" 
                />
                <button type="submit">search</button>
            </form>
        </div>
    )
}

export default SearchBar;