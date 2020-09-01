import React, { useState } from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import SpeakerIcon from '@material-ui/icons/Speaker';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import GetAppIcon from '@material-ui/icons/GetApp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDataLayerValue } from './DataLayer';
function Footer() {

    const [{}, dispatch] = useDataLayerValue();
    const [like, setLike] = useState(false)
    const [play, setPlay] = useState(false)
    const changePlaylist = () => {

        dispatch({
            type: "SET_PLAYLIST_ITEMS",
            playlists_items: null,
        })

    }
    const toggleLike = () => {
        setLike(!like);
    }
    const togglePlay = () => {
        setPlay(!play);
    }
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg" alt="poster" />
                    <div className="footer__songInfo">
                        <h4>Kaise hua</h4>
                        <p>Vishal Mishra</p>
                    </div>
                </div>
                <div className="footer__center">
                    <ShuffleIcon className="footer__icon" />
                    <SkipPreviousIcon className="footer__icon" />
                    <PlayCircleOutlineIcon fontSize="large" className="footer__icon play-btn" />
                    <SkipNextIcon className="footer__icon" />
                    <RepeatIcon className="footer__icon" />
                </div>

                <div className="footer__right">
                    <Grid container spacing={2}>
                        <Grid item>
                            <PlaylistPlayIcon className="footer__icon" />
                        </Grid>
                        <Grid item>
                            <SpeakerIcon className="footer__icon" />
                        </Grid>
                        <Grid item>
                            <VolumeDownIcon className="footer__icon" />
                        </Grid>
                        <Grid item xs>
                            <Slider />
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className="footer_playing">
                <div className="first-row">

                    <FavoriteIcon onClick={toggleLike} className={like ? 'liked' : 'normal'} />

                    <div className="footer__songInfo">
                        <h5>Vaaste • </h5>
                        <h5 className="song-name">Dhvani Bhanushali</h5>

                    </div>
                    <PlayArrowIcon onClick={togglePlay} className={play ? 'playing' : 'stop'} />
                </div>
                <div className="sec-row">
                    <div onClick={() => changePlaylist()} className="home-icon footer__icon">
                         <HomeIcon className="mu-icon" /><h5>Home</h5>
                    </div>
                    <div className="search-icon footer__icon">
                         <SearchIcon className="mu-icon" /><h5>Search</h5>
                    </div>
                    <div className="getApp-icon footer__icon">
                         <GetAppIcon className="mu-icon" /><h5>Get App</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer
