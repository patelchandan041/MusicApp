import React, { useState, useEffect } from 'react'
import './App.css';
import Player from './components/Player';

function App() {
  const [ songs, setSongs ] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "https://github.com/TylerPottsDev/rjs-music-app/blob/main/public/images/song-1.jpg?raw=true",
      src: "./music/1.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "https://github.com/TylerPottsDev/rjs-music-app/blob/main/public/images/song-2.jpg?raw=true",
      src: "./music/2.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "https://github.com/TylerPottsDev/rjs-music-app/blob/main/public/images/song-3.jpg?raw=true",
      src: "./music/2.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "https://github.com/TylerPottsDev/rjs-music-app/blob/main/public/images/song-4.jpg?raw=true",
      src: "./music/1.mp3"
    }
  ]);

  const [ currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex ] =  useState(currentSongIndex + 1)

  useEffect(() =>{
  setNextSongIndex(() =>{
    if(currentSongIndex + 1 > songs.length - 1){
      return 0;
    }
    else{
      return currentSongIndex + 1;
    }
  })
  },[currentSongIndex])
  return (
    <div className="App">
    <Player
   currentSongIndex={currentSongIndex}
   setCurrentSongIndex={setCurrentSongIndex}
   nextSongIndex={nextSongIndex}
   songs={songs}
    />
    </div>
  );
}

export default App;
