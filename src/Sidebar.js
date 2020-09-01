import React, { useState } from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'; import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './DataLayer';
function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();
    const [toggle, setToggle] = useState(false)
    const changePlaylist = () => {

        dispatch({
            type: "SET_PLAYLIST_ITEMS",
            playlists_items: null,
        })

    }
    const toggleSidebar = () => {
        setToggle(!toggle);
    }
    return (
        playlists ?
            <div className={toggle ? 'sidebar active-sidebar' : 'sidebar'}>
             <div className="mini_container">
                <img onClick={() => changePlaylist()} className="sidebar__logo" src="/assets/logo.jpg" alt="spotify" />
                <div onClick={toggleSidebar} className="hamburger">
                    <div className={ toggle ? 'line1 cross1': 'line1'}></div>
                    <div className={ toggle ? 'line2 cross2': 'line2'}></div>
                    <div className={ toggle ? 'line3 cross3': 'line3'}></div> 
                </div>
               </div>
                <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
                <SidebarOption title="Search" Icon={SearchIcon} />
                <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
                <br />

                <strong className="sidebar__title">PLAYLISTS</strong>
                <SidebarOption className="plus-icon" title="Create Playlist" Icon={AddBoxIcon} />
                <SidebarOption className="like-icon" title="Liked Songs" Icon={FavoriteIcon} />
                <div className="mid-line" />
                <div className="sidebar__songList">
                    {
                        playlists?.items?.map((playlist) => (
                            <SidebarOption key={playlist.id} link title={playlist.name} />
                        ))
                    }
                </div>


            </div>

            : <div className="sidebar">
                <h1>Loading...</h1>
            </div>
    )
}


export default Sidebar
