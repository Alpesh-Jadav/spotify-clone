import React from 'react'
import './SidebarOption.css'
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';
function SidebarOption({ title, Icon, className, link }) {


  const spotify = new SpotifyWebApi();
  const [{ playlists }, dispatch] = useDataLayerValue();


  const changePlaylist = (list) => {


    spotify.getPlaylist(list.id).then(response => {
      dispatch({
        type: "SET_PLAYLIST_ITEMS",
        playlists_items: response,
      })
    })


  }

  return (
    <div className="sidebarOption">
      {Icon && <Icon className={`${className} sidebarOption__icon`} />}

      {link ? <p onClick={() => changePlaylist(playlists?.items?.find(item => item.name === title))} className="sidebarOption__title">{title}</p>
        : <p className="sidebarOption__title">{title}</p>}
    </div>
  )
}
export default SidebarOption


