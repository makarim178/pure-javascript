// complete the challenge here 👇

const treasures = [
  { 'name': 'Gold Coin',
    'delay': 500 },
  { 'name': 'Silver Coin',
    'delay': 1000 },
  { 'name': 'Diamond',
    'delay': 1500 }
]


const sequentialContainer = document.querySelector('#sequential')
const parallelContainer = document.querySelector('#parallel')

function renderTreasure (name, container) {
  const treasureEle = document.createElement('span')
  const normalizedClassName = name.split(' ').join('-').
    toLowerCase()
  treasureEle.classList.add(normalizedClassName)
  container.appendChild(treasureEle)
}

// 1. Treasure Finder

export function findTreasure ({name, delay}) {
  try {
    if (!name) throw new Error("Name is not provided")
    return new Promise(resolve => {
      setTimeout(() => resolve({name, foundAt: Date.now()}), delay)
    })    
  } catch (error) {
    return new Promise(__, reject => reject(error.message))
  }
}

// 2. Sequential Treasure Hunt

export async function sequentialHunt (treasures) {
  let results = []
  for(let treasure of treasures) {
    await findTreasure(treasure).then(result => {
      renderTreasure(result.name, sequentialContainer)
      results.push(result)
    })
  }
  return results
}

sequentialHunt(treasures)

// 3. Parallel Treasure Hunt

export async function parallelHunt (treasures) {
    const parallelCalls = treasures.map(treasure => findTreasure(treasure))
    return await Promise.allSettled(parallelCalls).then(results => results.map(result => result.value))
}

parallelHunt(treasures).then((foundTreasures) => {
  foundTreasures.forEach((treasure) => {
    renderTreasure(treasure.name, parallelContainer)
  })
})
