import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './Sidebar.css'
import SidebarOption from './SidebarOption'
function Sidebar() {
    return (
        <div className="sidebar">
        <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify"/>
        
        <SidebarOption title="Home" Icon={HomeOutlinedIcon}/>
        <SidebarOption title="Search" Icon={SearchIcon}/>
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
         <br/>
         <strong className="sidebar__title">PLAYLISTS</strong>
         <hr />
        </div>
    )
}


export default Sidebar
