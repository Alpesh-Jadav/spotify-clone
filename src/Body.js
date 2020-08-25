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
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    const [liked, setLiked ] = useState(false)
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="Discovery Weekly"/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>

                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffel"/>
                    <div className="favorite" onClick={() => setLiked(!liked)}>
                    { liked ? <FavoriteIcon className="body__icon green-icon" fontSize="large"/>
                      : <FavoriteBorderIcon className="body__icon" fontSize="large"/>}
                    
                    </div>
                    <MoreHorizIcon  className="body__icon"/>
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
