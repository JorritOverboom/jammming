import React, { useState } from 'react';
import './NewPlaylist.css';

export default function NewPlaylist({transferredSongs, removeSong}) {
    
    function handleRemoveSongClick(index) {
        removeSong(index);
    }
    

    function showTransferredSongs() {
        if (transferredSongs) {
            const song = transferredSongs.map((song, index) =>
                (
                <div className="song" >
                    <div>
                        <h3>{song.artist}</h3>
                        <p>{song.songTitle} | {song.album}</p>
                    </div>
                    <div>
                        <div className="del" onClick={() => handleRemoveSongClick(index)}>-</div>
                    </div>
                </div>
                )
            );
            return song;
        } else {
            return (
                <div>
                    <h3>Add songs</h3>
                </div>
            )
        }
        
    }

    return (
        <div className="newPlaylist">
            <div className="newPlaylistBox">
                <h2>New Playlist</h2>
                {showTransferredSongs()}
                <form>
                    <button className="save">save to spotify</button>
                </form>
            </div>
        </div>
    )
}