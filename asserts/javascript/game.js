// Band Information 
let bandInfo = [
  {
    name: 'Maoli',
    song: "In Case You Didn't Know",
    image: 'maoli_band.jpg'
  },
  {
    name: 'Passafire',
    song: 'Fireside',
    image: 'passafire_band.jpeg'
  },
  {
    name: 'Rebelution',
    song: 'Settle Down Easy',
    image: 'rebelution_band.jpeg'
  },
  {
    name: 'SDIB',
    song: 'Midnight Hour',
    image: 'SDIB_band.jpg'
  },
]

// Initial Info
//Random Number
let randNum = Math.floor(Math.random() * bandInfo.length)
//Winning Score Board
let winScore =0
//Number of Guesses Remaining
let guessRemain =13
//Array of Guesses Made
let guessesArr =[]

document.onkeyup = function (event) {

// Selected Band Info
let bandName = bandInfo[randNum].name
let bandSong = bandInfo[randNum].song
let bandImg = bandInfo[randNum].image

// Current Word Spaces
let currentWord=[]
for(let i =0 ; i <bandName.length; i++){
   currentWord.push(" _ ")
}

// Users Guess
userGuess = event.key.toLowerCase()

// Letters Already Guessed
guessesArr.push(userGuess)




// Create a piece of html to display the  band name and song
document.querySelector(".game-band-info").innerHTML = `<h3> ${bandName} - ${bandSong}</h3>`

// Create a piece of html to display the bands image
document.querySelector(".game-image").innerHTML = `<img class="game-image" src="asserts/images/${bandImg}" alt=""></img>`

// Create a piece of html to display the bands song
document.querySelector('.game-music').innerHTML = `
      <h5>Hint: Play the Song!</h5> 
      <audio controls>
            <source src="asserts/audios/${bandSong}.m4a" type="audio/mp4">
        </audio>
`

// Create a piece of html to display the games information
document.querySelector('.game').innerHTML=`
          <h5>Wins</h5>
          <h6>${winScore}</h6>
          <h5>Current Word</h5>
          <h6>${currentWord.join("  ")}</h6>
          <h5>Number of Guesses Remaining</h5>
          <h6>${guessRemain}</h6>
          <h5>Letters Already Guessed</h5>
          <h6>${guessesArr}</h6>
`
}




