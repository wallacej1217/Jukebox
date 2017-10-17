var play = document.getElementsByClassName('play')[0]
var pause = document.getElementsByClassName('pause')[0]
var audio = document.getElementById('audio')
console.log(audio)


play.addEventListener('click', playAudio)
pause.addEventListener('click', pauseAudio)

function pauseAudio(){
  audio.pause()
}



function playAudio(){
  audio.play()
  console.log(audio.duration)
}
