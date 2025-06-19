// Spaceship Initialization
let fuelLevel = 100
let oxygenLevel = 100
const crewMembers = 5
let alienEncounters = 0
let distanceTraveled = 0

// 1. Get Going:
distanceTraveled = 153

// 2. Resource Management:
let numberOfFuelReduction = 0;
fuelLevel -= distanceTraveled * 0.5

console.log(`Fuel Reductions: ${(100 - fuelLevel)/5}, Current Fuel level: ${fuelLevel}`)
console.log(`Fuel is low: ${fuelLevel <= 30 }`)

// 3. Oxygen Consumption:
let oxygenConsumption = distanceTraveled * crewMembers / 100
console.log(`New oxyzgen level ${oxygenLevel -= oxygenConsumption}`)
console.log(`Oxygen is low: ${oxygenLevel < 20}`)
// 4. Alien Encounters
console.log(`Crew encountered aliens: ${distanceTraveled % 2 > 0}`)

// ignore this (it's useful for unit tests)
window.distanceTraveled = distanceTraveled
