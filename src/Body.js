import React, { useState, useEffect } from 'react'
import './Body.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow';
import { totalDuration, msToTotalTime } from './util';
import Playlist from './Playlist';

function Body({ spotify }) {
    const [{ playlists_items, reccomend_songs, playlists, user }, dispatch] = useDataLayerValue();
    const [duration, setDuration] = useState(0)

    // console.log('playlists ========> ', playlists)

    useEffect(() => {
        
       
        
        if (playlists.length > 0) {

            let song_id = playlists?.items[0]?.id
    
            spotify.getPlaylist(song_id).then(response => {
              dispatch({
                type: "SET_PLAYLIST_ITEMS",
                playlists_items: response,
              })
            })
            
            // console.log('id => ',song_id)
           }

    }, [])
    
    useEffect(() => {

      

        if(playlists_items) {
           


           if(playlists_items){

            const total = totalDuration(playlists_items);

            setDuration(total)
            console.log('total => ', total)

           }       
           
          

        }
       

    }, [playlists_items]);

 
   

    return (
        <div className="body">
           {playlists_items ? <><div className="body__grey">
                <div className="body__container">

                    <Header spotify={spotify} />

                    <div className="body__info">
                        {playlists_items ? <img src={playlists_items.images.length > 0 ? playlists_items.images[0].url : "/assets/unknown.png"} alt="My Playlist" /> :
                            <img src="/assets/unknown.png" alt="My Playlist" />
                        }
                        <div className="body__infoText">
                            <strong>PLAYLIST</strong>
                            <h2>{playlists_items ? playlists_items.name : 'Songs'}</h2>
                            <div className="duration"><p>{playlists_items?.owner?.display_name}</p>
                            
                            {
                                duration !== 0  ? (<><h1>{'•'}</h1><span className="total-hours">{msToTotalTime(duration)}</span></>) : <div></div>
                            }
                            
                            </div>

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
            </> : <div className="body__container">
               <Header spotify={spotify} />

              {playlists ? <h1>Your Playlists</h1> : <h1><span className="empty-playlist">Your playlist is Empty! <p>(Create your playlist on original spotify and return back this page)</p><br /></span>Reccomend For You</h1>}
                <div className="playlists">

                { 
                  playlists ?  playlists?.items?.map(item => (
                        <Playlist coverPhoto={item.images.length > 0 ? item.images[0].url : '/assets/unknown.png'} owner={item.owner.display_name} name={item.name} item={item} />
                    )) : reccomend_songs && <Playlist coverPhoto={reccomend_songs.images.length > 0 ? reccomend_songs.images[0].url : '/assets/unknown.png'} owner={reccomend_songs.owner.display_name} name={reccomend_songs.name} item={reccomend_songs} />
                }
                    
                   
                </div>
            </div>}
        </div>
    
   )
}

export default Body
