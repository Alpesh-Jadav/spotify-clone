
let total = 0 ;
let counter = 0;
function totalDuration(playlist) {
  
    playlist.tracks.items.map(item => {
      total = total + item.track.duration_ms
      counter++;
    })
    if(playlist.tracks.items.length == counter){
      return total
    }
     
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