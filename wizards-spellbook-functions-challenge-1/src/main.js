// complete the challenge here 👇
function createPotion(baseIngredient = 'water', catalystIngredient = 'moonstone dust', powerBooster = 'dragon breath') {
    return `A mystical brew of ${baseIngredient}, ${catalystIngredient}, and ${powerBooster}!`
}

console.log(createPotion())
console.log(createPotion("witch hazel"))
console.log(createPotion("toadstool extract", "pixie wings"))
console.log(createPotion("shadow essence", "vampire tears", "phoenix ash"))


function castCharm(targetName) {
    return `May luck and fortune smile upon ${targetName}!`
}

console.log(castCharm("Elara the Elf"))

const calculateSpellPower = age => age * 10

console.log(`Spell Power: ${calculateSpellPower(25)}`)

const castFireball = power => `Fireball blazes with pwoer ${power}!`
const summonWaterSpout = power => `Water spout surges with power ${power}!`
const callLightning = power => `Lightning strikes with power ${power}!`
const elementalSpells = [castFireball, summonWaterSpout, callLightning]

elementalSpells.forEach((fn, index) => console.log(fn(index+1)))

function determineSpellStrength(powerLevel) {
    if(powerLevel < 50) return 'Weak'
    else if (powerLevel < 100) return 'Moderate'
    return "Strong"
}

[35,75,150].forEach(pl => console.log(determineSpellStrength(pl)))

function transformIngredients(ingredients, callback) {
    return ingredients.map(callback)
}

const enchantedIngredients = transformIngredients([
   'newt eyes',
   'toe of frog',
   'wool of bat',
   'tongue of dog'
], ingredient => `enchanted ${ingredient}`)

console.log(enchantedIngredients.join(", "))
console.log(enchantedIngredients)