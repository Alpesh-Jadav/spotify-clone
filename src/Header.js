import React  from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';
function Header() {
    const [{ user }] = useDataLayerValue();

  
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon className="search" />
                <input placeholder="Serch for Artists, Songs or Podcasts" type="text" />
            </div>
           
            <div className="header__right">
                {user ? <Avatar className="header__avatar" src={user.images && user.images[0]?.url} /> : <Avatar />}
                <h4>{user?.display_name}</h4>
            </div>
        </div>

    )
}

export default Header
