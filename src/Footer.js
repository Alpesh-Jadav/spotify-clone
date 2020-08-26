import React from 'react'
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
function Footer() {
    return (
        <div className="footer">
           <div className="footer__container">
           <div className="footer__left">
            <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg" alt="poster"/>
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
            <RepeatIcon className="footer__icon"  />
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
        </div>
    )
}


export default Footer
