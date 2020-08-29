import React from 'react'
import './Playlist.css'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
function Playlist({ coverPhoto, name, owner, item }) {

    const spotify = new SpotifyWebApi();

    const [{}, dispatch] = useDataLayerValue();

    const changePlaylist = () => {
        spotify.getPlaylist(item.id).then(response => {
            dispatch({
                type: "SET_PLAYLIST_ITEMS",
                playlists_items: response,
            })
        })

    }

    return (
        <div onClick={() => changePlaylist()} className="playlist">
            <div className="playlist__content">
                <img className="cover" src={coverPhoto} alt="playlist cover" />
                <h3>{name}</h3>

                <span>By {owner}</span>
            </div>
        </div>
    )
}

export default Playlist
