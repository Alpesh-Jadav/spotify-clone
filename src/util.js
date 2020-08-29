
let total = 0;
let counter = 0;
let result = null;
function totalDuration(playlist) {
  
    playlist.tracks.items.map(item => {
      total = total + item.track.duration_ms
      counter++;
    })
    if(playlist.tracks.items.length === counter){
     
     counter = 0;
     result = total;
     total = 0;
     
     return result
     
    }
    counter = 0;
    total = 0;
     
}


function msToTime(duration) {

    let  seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60);
  
    if(seconds < 10) {
      return minutes + " : 0" + seconds;
    } else {
      return minutes + " : " + seconds;
    }
   
  }
  function msToTotalTime(duration) {

    let  seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    if(duration < 3600000){
      return minutes + " min " + seconds + " sec "
    }  else {
      return hours + " hr " + minutes + " min ";
    } 
   
  }
  export default msToTime
  export {totalDuration, msToTotalTime}