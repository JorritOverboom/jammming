import React, { useState } from 'react';
import './SearchBar.css';
import requestAccessToken from '../../Utilities/Spotify'
import {accessToken} from '../../Utilities/Spotify'


export default function SearchBar({onSearchClick}) {
  const [text, setText] = useState('');
  const [searchResult, setSearchResult] = useState();

  requestAccessToken();

  const handleTextChange = ({ target }) => {
    setText(target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (text.length > 0) {
      const query = encodeURIComponent(text);

      try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        setSearchResult([data]);
        console.log("Search result:", data);
      } catch (error) {
        console.error('Error fetching search result:', error);
      }

      setText('');
    }
    
  }
  
if(searchResult){
    onSearchClick(searchResult);
    console.log(searchResult);
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a track"
          value={text}
          onChange={handleTextChange}
        />
        <button type="submit">search</button>
      </form>
    </div>
  )
}
