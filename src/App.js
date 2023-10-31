import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Results from './Components/Results/Results';
import NewPlaylist from './Components/NewPlaylist/NewPlaylist'


function App() {
  const [transferredSongs, setTransferredSongs] = useState([]);

  const handleAddSongClick = (songs) => {
    setTransferredSongs((transferredSongs) => {
      return [...songs, ...transferredSongs];
    });
  }

  function HandleRemoveSongClick(index) {
    setTransferredSongs((currentSongs) => {
      const updatedSongs = [...currentSongs];
      updatedSongs.splice(index, 1);
      return updatedSongs;
    })
  }

  return (
    <div className="cover">
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="app">
        <SearchBar />
        <div className="playlist">
          <Results onAddClick={handleAddSongClick}/>
          <NewPlaylist transferredSongs={transferredSongs} removeSong={HandleRemoveSongClick}/>
        </div>
      </div>
    </div>
      
  );
}

export default App;
