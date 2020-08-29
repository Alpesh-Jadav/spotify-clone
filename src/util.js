
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
    total = 0;
    counter= 0;
     
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
  function msToTotalTime(duration) {

    let  seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = hours;
    minutes = minutes;
    seconds = seconds;
    if(duration < 3600000){
      return minutes + " min " + seconds + " sec "
    }  else {
      return hours + " hr " + minutes + " min ";
    } 
   
  }
  export default msToTime
  export {totalDuration, msToTotalTime}