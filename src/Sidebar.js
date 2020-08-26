import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './DataLayer';
function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();
    
    return (
        <div className="sidebar">
        <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify"/>
        
        <SidebarOption title="Home" Icon={HomeOutlinedIcon}/>
        <SidebarOption title="Search" Icon={SearchIcon}/>
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
         <br/>
        
         <strong className="sidebar__title">PLAYLISTS</strong>
         <SidebarOption className="plus-icon" title="Create Playlist" Icon={AddBoxIcon}/>
        <SidebarOption className="like-icon" title="Liked Songs" Icon={FavoriteIcon}/>
          <div className="mid-line" />
         {
             playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
             ))
         }
         

        </div>
    )
}


export default Sidebar
