// Band Information 
let bandInfo = [
  {
    name: 'maoli',
    song: "In Case You Didn't Know",
    image: 'maoli_band.jpg'
  },
  {
    name: 'passafire',
    song: 'Fireside',
    image: 'passafire_band.jpeg'
  },
  {
    name: 'rebelution',
    song: 'Settle Down Easy',
    image: 'rebelution_band.jpeg'
  },
  {
    name: 'sdib',
    song: 'Midnight Hour',
    image: 'SDIB_band.jpg'
  },
]

//  DefinedVariables
let score = 0
let currentBandName = ""
let currentBandSong = ""
let currentBandImage = ""
let guessLeft = 11
let currentGuesses = []
let wrongLetters = []


// Random Band Selector Function
function randBand(arr) {
  let randNum = Math.floor(Math.random() * arr.length)
  currentBandName = arr[randNum].name
  currentBandSong = arr[randNum].song
  currentBandImage = arr[randNum].image
}

// Create the Hidden Word to Display Function
function hiddenWord() {
  let tmpWord = []
  for (let i = 0; i < currentBandName.length; i++) {
    if (currentGuesses.indexOf(currentBandName[i]) !== -1) {
      tmpWord.push(currentBandName[i])
    } else {
      tmpWord.push("*")
    }
  }
  return tmpWord.join("")
}

// Restart  Game Function
function restartGame() {
  randBand(bandInfo)
  guessLeft = 11
  tmpWord = []
  currentGuesses = []
}

// HTML Game Display Function
function displayGame() {
  document.querySelector('.game').innerHTML = `
          <h5>Wins</h5>
          <h6>${score}</h6>
          <h5>Current Word</h5>
          <h6 class="hidden_word">${hiddenWord()}</h6>
          <h5>Number of Guesses Remaining</h5>
          <h6>${guessLeft}</h6>
          <h5>Letters Already Guessed</h5>
          <h6>${currentGuesses}</h6>
          `
}

//  HTML  Image and Song Display Function
function displaySongImage(x) {
  if(x ==="win"){
  document.querySelector(".game-band-info").innerHTML = `
  <h3> You WON!</h3>
  <h3> ${currentBandName} - ${currentBandSong}</h3>`
  document.querySelector(".game-image").innerHTML = `<img class="game-image" src="asserts/images/${currentBandImage}" alt=""></img>`
 
} else if  (x==="loss") {
    document.querySelector(".game-band-info").innerHTML = `
  <h3> You Loss!</h3>
  <h3> ${currentBandName} - ${currentBandSong}</h3>`
    document.querySelector(".game-image").innerHTML = `<img class="game-image" src="asserts/images/${currentBandImage}" alt=""></img>`
  
  } else {
    document.querySelector(".game-band-info").innerHTML = ``
    document.querySelector(".game-image").innerHTML = `<img class="game-image" src="asserts/images/hangman-image.jpg" alt=""></img>`
  }
}

// HTML  Display Song Function
function songAudio() {
  document.querySelector('.game-music').innerHTML = `
      <h6>Hint: Play the Song!</h6> 
      <audio controls>
            <source src="asserts/audios/${currentBandSong}.m4a" type="audio/mp4">
        </audio>
`
}

// User Interface 
document.addEventListener('keypress', function (event) {
  // User Guesses Letter
  const letter = event.key.toLowerCase()
  currentGuesses.push(letter)
  guessLeft--

  // Removing the Start key  press
  if (guessLeft === 10) {
    currentGuesses = []
    songAudio()
  }

  // Win the Game
  if (hiddenWord() === currentBandName) {
    score++
    displaySongImage("win")
    restartGame()
    guessLeft--
    songAudio()
  }

  //  Game Over (Loss)
  if (guessLeft <= 0) {
    displaySongImage("loss")
    restartGame()
    guessLeft--
    songAudio()
  }

// Reseting the Display Image after Win orLoss
if(guessLeft===9){
  displaySongImage()
}

  displayGame()
})

restartGame()





















// // Initial Info
// //Random Number
// let randNum = Math.floor(Math.random() * bandInfo.length)
// //Winning Score Board
// let winScore =0
// //Number of Guesses Remaining
// let guessRemain =13
// //Array of Guesses Made
// let guessesArr =[]








// document.onkeyup = function (event) {

// // Selected Band Info
// let bandName = bandInfo[randNum].name
// let bandSong = bandInfo[randNum].song
// let bandImg = bandInfo[randNum].image

// // Current Word Spaces
// let currentWord=[]
// for(let i =0 ; i <bandName.length; i++){
//    currentWord.push(" _ ")
// }

// // Users Guess
// userGuess = event.key.toLowerCase()

// // Letters Already Guessed
// guessesArr.push(userGuess)





// // Create a piece of html to display the bands song


// // Create a piece of html to display the games information

// `
// }




