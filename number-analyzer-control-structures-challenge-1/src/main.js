// complete the challenge here 👇
let numbers = [23, 54, 32, 87, 47, 15, 98, 6, 63, 41]
// One way
function findEvenOddNumbers() {
    let evenCount = 0, oddCount = 0
    
    numbers.forEach(number => number % 2 === 0 ? evenCount++ : oddCount++)
    return { evenCount, oddCount}
}

//other way
// const countObj = { evenCount: 0, oddCount: 0 }
// const countNumbers = (acc, number ) => {
//     if (number % 2 === 0 ) acc.evenCount++
//     else acc.oddCount++
//     return acc
// }

// const { evenCount, oddCount } = numbers.reduce(countNumbers, countObj)

const { evenCount, oddCount } = findEvenOddNumbers()

console.log(`Even numbers: ${evenCount}\nOdd numbers: ${oddCount}`)

function rangeClassifier() {
    let low = 0, medium = 0, high = 0

    numbers.forEach(number => {
        if (number < 30) low++
        else if ( number < 70 ) medium++
        else high++
    })

    return {low, medium, high}
}

const { low, medium, high } = rangeClassifier()
console.log(`Low numbers: ${low}\nMedium numbers: ${medium}\nHigh numbers: ${high}`)

const sum = numbers.reduce((acc, number) => acc += number, 0)
const mean = sum / numbers.length

console.log(`Sum: ${sum}\nAverage: ${mean.toFixed(2)}`)

