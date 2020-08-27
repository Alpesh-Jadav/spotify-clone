import React from 'react'
import './SidebarOption.css'
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';
function SidebarOption({ title, Icon, className}) {

    
    const spotify = new SpotifyWebApi();
    const [{playlists}, dispatch] = useDataLayerValue();
    
  


    return (
        <div className="sidebarOption">
           {Icon && <Icon className={`${className} sidebarOption__icon`} />}

            <p className="sidebarOption__title">{title}</p>
        </div>
    )
}
// playlists?.items?.find(item => item.name === title)
export default SidebarOption


