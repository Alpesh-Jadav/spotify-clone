import React, { useState } from 'react'
import './Body.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow';
function Body({ spotify }) {
    const [{ playlists_items }, dispatch] = useDataLayerValue();



    console.log('loking for playlist items =>', playlists_items)
    return (
        <div className="body">
            <div className="body__grey">
                <div className="body__container">

                    <Header spotify={spotify} />

                    <div className="body__info">
                        {playlists_items ? <img src={playlists_items?.images[0].url} alt="My Playlist" /> :
                            <img src="/assets/unknown.png" alt="My Playlist" />
                        }
                        <div className="body__infoText">
                            <strong>PLAYLIST</strong>
                            <h2>{playlists_items ? playlists_items.name : 'Songs'}</h2>
                        <div className="duration"><p>{playlists_items?.owner?.display_name}</p><h1>{'•'}</h1><span className="total-hours">
                                2 hr 20 min
                        </span></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="body__dark">
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__playIcon" />
                    <MoreHorizIcon className="body__icon" />
                </div>
                {playlists_items ?
                    <div className="body_songList">
                        {playlists_items?.tracks.items.map(item => (
                            <SongRow track={item.track} />
                        ))}
                    </div> :
                    <div className="empty-list">
                        <section>
                            <AlbumOutlinedIcon className="disc-icon" />
                            <h2>It's a bit empty here...</h2>
                            <h5>Let's find some songs for your playlist</h5>
                            <button>NEW RELEASES</button>
                        </section>
                    </div>
                }
            </div>
            </div>
        </div>
    )
}

export default Body
