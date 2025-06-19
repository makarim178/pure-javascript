// complete the challenge here 👇
let garden = ["Tomato", "Carrot", "Lettuce", "Cucumber", "Pepper"]

const logGarden = prepend => console.log(`${prepend} garden: ${garden.join(', ')}`)
logGarden("Initial")
garden.push("Pumpkin")
garden.unshift("Sunflower")
logGarden("Updated")
console.log(`Number of plants: ${garden.length}`)
let harvestedPlants = garden.pop().toString().concat(" and ", garden.shift().toString())
console.log(`Harvested: ${harvestedPlants}`)
let indexOfCucumber = garden.indexOf("Cucumber")
garden.splice(indexOfCucumber, 1, "Bell Pepper")
console.log(`Replaced plant at index: ${indexOfCucumber}`)
console.log(`Garden after replacement: ${garden.join(", ")}`)
console.log(`Garden includes Weeds: ${garden.includes('Weeds')}`)