import React from 'react'
import { useDataLayerValue } from "./DataLayer";

// const [{ playlists_items, reccomend_songs }, dispatch] = useDataLayerValue();
let total = 0 ;
function totalDuration(playlist, setDuration) {
  // console.log('function playlist', playlist)
  //   playlist.tracks.items.map(item => (
  //     total = total + item.track.duration_ms
  //   ))
  //     setDuration(total)
  //   console.log('total = ', total);
  //   console.log('playlist = ', playlist);
}


function msToTime(duration) {

    let  seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = hours;
    minutes = minutes;
    seconds = seconds;
  
    return minutes + ":" + seconds;
  }

  export default msToTime
  export {totalDuration}