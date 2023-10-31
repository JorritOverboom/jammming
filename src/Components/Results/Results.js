import React, {useState} from 'react';
import './Results.css'

export default function Results({onAddClick}) {

    const resultList = [
            {
                artist: 'Elton John',
                songTitle: 'Tiny Dancer',
                album: 'Madman Across The Water'
            },
            {
                artist: 'Run The Jewels',
                songTitle: 'holy calamafuck',
                album: 'RTJ4'
            },
            {
                artist: 'Gorillaz',
                songTitle: 'Last Living Souls',
                album: 'Demon Days'
            },
            {
                artist: 'Sticks',
                songTitle: 'Solo',
                album: 'STICKmatic'
            },
            {
                artist: 'The Chemical Brothers',
                songTitle: 'Snow',
                album: 'Further'
            },
            {
                artist: 'Kubus',
                songTitle: 'Koppensnellers',
                album: 'Buiten Westen'
            }
        ]
        
    function handleAddSongClick(index) {
            onAddClick([resultList[index]]);
    }
    
    function showResults() {
        const song = resultList.map((song, index) =>
            (
            <div className="song">
                <div>
                    <h3>{song.artist}</h3>
                    <p>{song.songTitle} | {song.album}</p>
                </div>
                <div>
                    <div className="add" onClick={() => handleAddSongClick(index)}>+</div>
                </div>
            </div>
            )
        );

        return song;
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