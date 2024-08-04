const playButton = document.getElementById('play-button')//1.all 
const pauseButton = document.getElementById('pause-button')
const stopButton = document.getElementById('stop-button')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
let currentCharacter

playButton.addEventListener('click', () => {//2.full
  playText(textInput.value)
})
pauseButton.addEventListener('click', pauseText)//9.
stopButton.addEventListener('click', stopText)//12.
speedInput.addEventListener('input', () => {//16.full
  stopText()
  playText(utterance.text.substring(currentCharacter))//in the middle of the speaking also, we can change 
  //the speed.it will utter the last twice
})

const utterance = new SpeechSynthesisUtterance()//4.
utterance.addEventListener('end', () => {//8.full
  textInput.disabled = false
})
utterance.addEventListener('boundary', e => {//14.full
  currentCharacter = e.charIndex
})

function playText(text) {//3.
  if (speechSynthesis.paused && speechSynthesis.speaking) {//11.full
    return speechSynthesis.resume()
  }
  if (speechSynthesis.speaking) return//17.
  utterance.text = text//15.
  utterance.rate = speedInput.value || 1//5.we are using api utterance...and more....
  textInput.disabled = true//7.when the computer is speaking, we have to disable the text input.
  speechSynthesis.speak(utterance)//6.
}

function pauseText() {//10.full
  if (speechSynthesis.speaking) speechSynthesis.pause()//if we are speaking,then only.other time,do not do
  //anything
}

function stopText() {//13.full
  speechSynthesis.resume()//if it is in pause state,it will cancel.we have to play from the beginning
  speechSynthesis.cancel()
}