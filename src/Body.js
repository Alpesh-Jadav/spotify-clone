import React, { useState } from 'react'
import './Body.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow';
function Body({ spotify }) {
    const [{ playlists_items }, dispatch] = useDataLayerValue();
    // let [totalHours, setTotalHours] = useState(0)


    
    console.log('loking for playlist items =>', playlists_items)
    return (
        <div className="body">
            <div className="body__container">
                <Header spotify={spotify} />

                <div className="body__info">
                    <img src={playlists_items?.images[0].url} alt="Discovery Weekly" />
                    <div className="body__infoText">
                        <strong>PLAYLIST</strong>
                        <h2>{playlists_items?.name}</h2>
                        <div className="duration"><p>{playlists_items?.owner?.display_name}</p><span><h1>.</h1></span><span className="total-hours">
                            2 hr 20 min 
                        </span></div>

                    </div>
                </div>
                <div className="body__songs">
                    <div className="body__icons">
                        <PlayCircleFilledIcon className="body__shuffel" />
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
