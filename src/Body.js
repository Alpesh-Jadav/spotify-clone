import React, { useState } from 'react'
import './Body.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow';
function Body({ spotify }) {
    const [{ playlists_items, user }, dispatch] = useDataLayerValue();
    const [liked, setLiked] = useState(false)

    console.log('loking for playlist items =>', playlists_items)
    return (
        <div className="body">
            <div className="body__container">
                <Header spotify={spotify} />

                <div className="body__info">
                    <img src={playlists_items?.images[0].url} alt="Discovery Weekly" />
                    <div className="body__infoText">
                        <strong>PLAYLIST</strong>
                        <h2>My Songs</h2>
                        <div className="duration"><p>{user?.display_name}</p><span><h1>.</h1></span><span className="total-hours">2 hr 12 min</span></div>

                    </div>
                </div>
                <div className="body__songs">
                    <div className="body__icons">
                        <PlayCircleFilledIcon className="body__shuffel" />
                        <div className="favorite" onClick={() => setLiked(!liked)}>
                            {liked ? <FavoriteIcon className="body__icon green-icon" fontSize="large" />
                                : <FavoriteBorderIcon className="body__icon" fontSize="large" />}

                        </div>
                        <MoreHorizIcon className="body__icon" />
                    </div>
                    <div className="body_songList">
                        {playlists_items?.tracks.items.map(item => (
                            <SongRow track={item.track} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
