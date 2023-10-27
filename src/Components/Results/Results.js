import React from 'react';
import './Results.css'

function Results() {
    
    function showResult() {

        const songs = [
            {
                artist: 'Elton John',
                songTitle: 'Tiny Dancer',
                album: 'Madman Across The Water'
            },
            {
                artist: 'Run The Jewels',
                songTitle: 'holy calamfuck',
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

        const list = songs.map((a) => 
            (
            <div>
                <h3>{a.artist}</h3>
                <p>{a.songTitle} | {a.album}</p>
            </div>
            )
        );

        const song = list.map((a) =>
            (
            <div className="song">
                {a}
                <div>
                    <div className="alt">+</div>
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
                {showResult()}
            </div>
        </div>
    )
}

export default Results;