var play = document.getElementsByClassName('play')[0]
var pause = document.getElementsByClassName('pause')[0]
var stop = document.getElementsByClassName('stop')[0]
var audio = document.getElementById('audio')
console.log(audio)



play.addEventListener('click', playAudio)
pause.addEventListener('click', pauseAudio)
stop.addEventListener('click', stopAudio)
function pauseAudio(){
  audio.pause()
}



function playAudio(){
  audio.play()
  console.log(audio.duration)
}

 function stopAudio()
{
    audio.pause();
    audio.currentTime = 0.0;
}
