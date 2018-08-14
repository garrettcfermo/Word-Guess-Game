

// Band Information 
let bandInfo = [
  {
    name: 'Maoli',
    song: "In Case You Didn't Know",
    image: 'maoli_band'
  },
  {
    name: 'Passafire',
    song: 'Fireside',
    image: 'passafire_band'
  },
  {
    name: 'Rebelution',
    song: 'Settle Down Easy',
    image: 'rebelution_band'
  },
  {
    name: 'SDIB',
    song: 'Midnight Hour',
    image: 'SDIB_band'
  },
]



// Random Number to pick Band
let randNum =Math.floor(Math.random()* bandInfo.length)
console.log(randNum)

