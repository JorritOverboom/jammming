import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Results from './Components/Results/Results';
import NewPlaylist from './Components/NewPlaylist/NewPlaylist'


function App() {


  return (
    <div className="cover">
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="app">
        <SearchBar />
        <div className="playlist">
          <Results />
          <NewPlaylist />
        </div>
      </div>
    </div>
      
  );
}

export default App;
