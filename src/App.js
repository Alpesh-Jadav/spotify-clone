import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();
function App() {

  const [{user, playlists}, dispatch] = useDataLayerValue();
  useEffect(() => {

    const hash = getTokenFromUrl();
    window.location.hash="";

    const _token = hash.access_token;
  
    if(_token) {
      
       dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
       
        dispatch({
          type: "SET_USER",
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
      spotify.getPlaylist('178n8yStfk0HSYs8eEsyTc').then(response => {
        dispatch({
          type: "SET_PLAYLIST_ITEMS",
          playlists_items: response,
        })
      })
      spotify.getPlaylist('4TPxDnAX8Ec6Gxl1tSeFEP').then(response => {
        dispatch({
          type: "SET_RECCOMEND_SONGS",
          reccomend_songs: response,
        })
      })
    }
    
   
    }, []) 
  return (
    <div className="app">
      {
        user ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
     

    </div>
  );
}

export default App;
