import React from 'react';
import './NewPlaylist.css';

function NewPlaylist() {
    return (
        <div className="newPlaylist">
            <div className="newPlaylistBox">
                <h2>New Playlist</h2>
                <div className="song">
                    <div>
                        <h3>Tiny Dancer</h3>
                        <p>Elton John | Madman Across The Water</p>
                    </div>
                    <div>
                        <div className="alt">-</div>
                    </div>
                </div>
                <form>
                    <button className="save">save to spotify</button>
                </form>
            </div>
        </div>
    )
}

export default NewPlaylist;