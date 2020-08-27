import React, { useState } from 'react'
import './Body.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow';
function Body({ spotify }) {
    const [{ playlists_items, reccomend_songs }, dispatch] = useDataLayerValue();


    return (
        <div className="body">
            <div className="body__grey">
                <div className="body__container">

                    <Header spotify={spotify} />

                    <div className="body__info">
                        {playlists_items ? <img src={playlists_items.images.length > 0 ? playlists_items.images[0].url : "/assets/unknown.png"} alt="My Playlist" /> :
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
                   
                    {playlists_items?.tracks.items.length > 0 ?
                        (<><div className="body__songList">
                            {playlists_items?.tracks.items.map(item => (
                                <SongRow track={item.track} />
                            ))}
                        </div>
                        <h2 className="recommend-title">Recommended Songs</h2>
                            <div className="body__emptySongList">
                                {reccomend_songs?.tracks.items.map(item => (
                                    <SongRow add={true} track={item.track} />
                                ))}
                            </div></>
                         ):
                       ( <div className="empty-list">
                            <div className="section-container">
                                <section>
                                    <AlbumOutlinedIcon className="disc-icon" />
                                    <h2>It's a bit empty here...</h2>
                                    <h5>Let's find some songs for your playlist</h5>
                                    <button>NEW RELEASES</button>
                                </section></div>
                                  
                            <h2 className="recommend-title">Recommended Songs</h2>
                            <div className="body__emptySongList">
                                {reccomend_songs?.tracks.items.map(item => (
                                    <SongRow add={true} track={item.track} />
                                ))}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Body
