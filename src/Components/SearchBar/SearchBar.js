import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter A Song Title" />
                <button type="submit">search</button>
            </form>
        </div>
    )
}

export default SearchBar;