// complete the challenge here 👇


// 1. Star Counter

export function createStarCounter (initialValue) {
  let value = initialValue
  return {
    increment: () => value++,
    decrement: () => value--,
    getValue: () => value
  }
}

const starCounter = createStarCounter(3)
starCounter.increment()
starCounter.increment()
starCounter.decrement()
starCounter.decrement()
starCounter.decrement()


const starContainer = document.querySelector('#starContainer')
const starCount = starCounter.getValue()
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('img')
  star.src = '/star.svg'
  star.alt = 'star'
  star.classList.add('star')
  starContainer.appendChild(star)
}

// 2. Cosmic Signal Broadcaster
const signalBroadcaster = document.querySelector('#signalBroadcaster')
export function broadcastSignals () {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      signalBroadcaster.classList.add(`signal-${i}`)
      if (i > 1) {
        signalBroadcaster.classList.remove(`signal-${i - 1}`)
      }
    }, i * 100)
  }
}

broadcastSignals()


// 3. Function Chain: Cosmic Adjuster
const planets = document.querySelector('#planets')
const rockets = document.querySelector('#rockets')
const airships = document.querySelector('#airships')

function createItem (container, count) {
  for (let i = 0; i < count; i++) {
    const planet = document.createElement('span')
    container.appendChild(planet)
  }
}

export function createCosmicAdjuster (initialState) {
  let value = { ...initialState }
  return {
    'addRockets': function(n){
      createItem(rockets, n + value.rockets)
      return this
    },
    'addPlanets': function(n){
      createItem(planets, n + value.planets)
      return this
    },
    'addAirships': function(n){
      createItem(airships, n + value.airships)
      return this
    }
  }
}


const adjuster = createCosmicAdjuster({ 'rockets': 1,
  'planets': 2,
  'airships': 3 })
adjuster.addRockets(5).addPlanets(3).
  addAirships(1)
