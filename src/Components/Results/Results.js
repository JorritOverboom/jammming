import React from 'react';
import './Results.css'

export default function Results({onAddClick, searchResult}) {
    function handleAddSongClick(index) {
            onAddClick([searchResult[0].tracks.items[index]]);
    }
    
    function showResults() {
        if(searchResult) {
            const items = searchResult[0].tracks.items
            const song = items.map((song, index) => 
                (
                <div className="song">
                    <div>
                        <h3>{song.artists[0].name}</h3>
                        <p>{song.name} | {song.album.name}</p>
                    </div>
                    <div>
                        <div className="add" onClick={() => handleAddSongClick(index)}>+</div>
                    </div>
                </div>
                )
            )
            return song
        }
    }

    return (
        <div className="results">
            <div className="resultsBox">
                <h2>Results</h2>
                {showResults()}
            </div>
        </div>
    )
}