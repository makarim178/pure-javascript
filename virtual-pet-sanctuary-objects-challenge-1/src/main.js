// complete the challenge here 👇
function createVirtualPet (name, species, mood){
    return {name, species, mood }
}

let petSanctuary = {}

function addToSanctuary(fn){
    const pet = fn
    petSanctuary[pet.name] = pet
}

addToSanctuary(createVirtualPet("Pixel", "dog", "0.8"))
addToSanctuary(createVirtualPet("Bitsy", "cat", "0.6"))
addToSanctuary(createVirtualPet("Datastream", "fish", "0.5"))

console.log(petSanctuary)

function isPetInSanctuary(petName) {
    let result = false
    for(let key in petSanctuary) if (key === petName) result = true

    return `${petName} is in Sanctuary: ${result}`
}

console.log("--Sanctuary Check--")
console.log(isPetInSanctuary("Pixel"))
console.log(isPetInSanctuary("Glitch"))
console.log('')

function generatePetReport(sanctuary) {
    console.log("--Pet Report--")
    for (let key in sanctuary) {
        const { species, mood } = sanctuary[key]
        console.log(`Name: ${key}, Species: ${species}, Mood: ${mood}`)
    }
}

generatePetReport(petSanctuary)


function findHappyPets(moodThreshold) {
    // one way
    // return Object.keys(petSanctuary).reduce((acc, name) => {
    //     if (petSanctuary[name].mood >= moodThreshold) acc.push(petSanctuary[name])
    //     return acc
    // }, [])

    // other way
    let happyPets = []
    for (let key in petSanctuary) {
        if (petSanctuary[key].mood > moodThreshold) happyPets.push(petSanctuary[key])
    }

    return happyPets
}
console.log("--Happy Pets--")
console.log(findHappyPets(0.7))