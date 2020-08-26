


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