import React, { useState } from 'react';
import './NewPlaylist.css';
import accessToken from '../../Utilities/Spotify'

export default function NewPlaylist({transferredSongs, removeSong, moveUp, moveDown}) {
    const [name, setName] = useState('');

    const handleNameChange = ({target}) => {
        setName(target.value);
    }
    
    function handleRemoveSongClick(index) {
        removeSong(index);
    }

    function handleMoveUpClick(index) {
        moveUp(index)
    }

    function handleMoveDownClick(index) {
        moveDown(index)
    }

    function handleSubmit() {
        // Step 1: Request user's profile to get their user ID
        fetch('https://api.spotify.com/v1/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        })
          .then((response) => response.json())
          .then((user) => {
            const userId = user.id;
            
            // Step 2: Create a new playlist with the specified name
            const playlistData = {
              name: name,  // Use the 'name' state as the playlist name
              description: 'New playlist description',
              public: false,
            };
            
            fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(playlistData),
            })
              .then((response) => response.json())
              .then((playlist) => {
                const playlistId = playlist.id;
                
                // Step 3: Add transferredSongs to the created playlist
                const uris = transferredSongs.map((song) => song.uri);
                const addTracksData = {
                  uris: uris,
                  position: 0,
                };
      
                fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(addTracksData),
                })
                  .then(() => {
                    // Playlist created and songs added successfully
                    // You can add any further actions or feedback here
                  })
                  .catch((error) => {
                    console.error('Error adding tracks to the playlist:', error);
                  });
              })
              .catch((error) => {
                console.error('Error creating a new playlist:', error);
              });
          })
          .catch((error) => {
            console.error('Error fetching user profile:', error);
          });
      }

    function showTransferredSongs() {
        if (transferredSongs) {
            const song = transferredSongs.map((song, index) =>
                (
                <div className="song" >
                    <div>
                        <h3>{song.artists[0].name}</h3>
                        <p>{song.name} | {song.album.name}</p>
                    </div>
                    <div className="buttons">
                        <div className="moveUp" onClick={() => handleMoveUpClick(index)} style={{visibility: index === 0 ? "hidden": "visible"}}>⇧</div>
                        <div className="del" onClick={() => handleRemoveSongClick(index)}>-</div>
                        <div className="moveDown" onClick={() => handleMoveDownClick(index)} style={{visibility: index === transferredSongs.length - 1 ? "hidden": "visible"}}>⇩</div>
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
            <form className="newPlaylistBox" onSubmit={handleSubmit}>
                <div className="playlistNameBox">
                    <input 
                        className="playlistName" 
                        type="text"
                        placeholder="Name your playlist" 
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="songs">
                    {showTransferredSongs()}
                </div>
                <button className="save" type="submit">save to spotify</button>
            </form>
        </div>
    )
}