import React, {useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Results from './Components/Results/Results';
import NewPlaylist from './Components/NewPlaylist/NewPlaylist'

function App() {
  const [transferredSongs, setTransferredSongs] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  const handleAddSongClick = (songs) => {
    setTransferredSongs((transferredSongs) => {
      return [...songs, ...transferredSongs];
    });
  }

  const handleSearchClick = (songs) => {
    setSearchResult(songs);
  }
 

  function handleRemoveSongClick(index) {
    setTransferredSongs((currentSongs) => {
      const updatedSongs = [...currentSongs];
      updatedSongs.splice(index, 1);
      return updatedSongs;
    })
  }

  function handleMoveUpClick(index) {
    if (index === 0) {
      return;
    }
    const newArray = [...transferredSongs];
    const currentIndex = transferredSongs[index]
    const previousIndex = transferredSongs[index - 1]
    newArray[index] = previousIndex;
    newArray[index - 1] = currentIndex;

    setTransferredSongs(newArray);
  }

  function handleMoveDownClick(index) {
    if (index === transferredSongs.length - 1) {
      return;
    }
    const newArray = [...transferredSongs];
    const currentIndex = transferredSongs[index]
    const nextIndex = transferredSongs[index + 1]
    newArray[index] = nextIndex;
    newArray[index + 1] = currentIndex;

    setTransferredSongs(newArray);
  }

  return (
    <div className="cover">
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="app">
        <SearchBar onSearchClick={handleSearchClick}/>
        <div className="playlist">
          <Results 
          onAddClick={handleAddSongClick}
          searchResult={searchResult}
          />
          <NewPlaylist 
          transferredSongs={transferredSongs} 
          removeSong={handleRemoveSongClick}
          moveUp={handleMoveUpClick}
          moveDown={handleMoveDownClick}
          />
        </div>
      </div>
    </div>
      
  );
}

export default App;
