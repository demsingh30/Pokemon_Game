
let pokemonName = ''
let pokemonStamp = 0
let pokemon = 0
let roundOver = false



function newRound () {
   pokemon = Math.floor(Math.random() * 151) + 1  
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
   document.querySelector('#pokemon-img').classList.add('hidden-pokemon')
   document.querySelector('#guess-btn').textContent = 'Guess'
   document.querySelector('#result').textContent = ''
   document.querySelector('#guess').value = ''
   pokemonStamp = 0
   roundOver = false
   fetch(url)
  .then(function(res) {
    return res.json()
  })
  .then(function(data) {
    console.log(data)
    document.querySelector('#pokemon-img').src = data.sprites['front_default']
    pokemonName = data.species.name
  })
  .catch(function(err) {
    console.log('error', err)
  })
}

newRound()


document.querySelector('#guess-btn').addEventListener('click', function() {
  if (roundOver) {
    newRound()
  } else {
    if (pokemon !== pokemonStamp) {
      roundOver = true
      document.querySelector('#guess-btn').textContent = 'Next'
      const pokebutton = document.querySelector('#guess').value
      if (pokebutton.toLowerCase().trim().replaceAll('-', '') === pokemonName) {
        document.querySelector('#pokemon-img').classList.remove('hidden-pokemon')
        document.querySelector('#result').textContent = `Correct! It is ${pokemonName}`
        let currentPoints = Number(localStorage.getItem('points'))
        currentPoints++
        localStorage.setItem('points', currentPoints)
        document.querySelector('#points').textContent = currentPoints
        pokemonStamp = pokemon
      } else {
        document.querySelector('#result').textContent = `Oops! It is ${pokemonName}`
      }
    }
  }
})



function pointsSystem () {
  if (localStorage.getItem('points') === null) {
    localStorage.setItem('points', 0)
  }
  document.querySelector('#points').textContent = Number(localStorage.getItem('points'))

}
pointsSystem()

document.querySelector('#reset-btn').addEventListener('click' , function() {
 localStorage.setItem('points', 0)
  let resetScore = 0
  document.querySelector('#points').textContent = resetScore

})
