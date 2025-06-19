const firstWord = document.head.lastElementChild.textContent
console.log(firstWord)

const secondWord = document.body.firstChild
console.log(secondWord)

const thirdWord = document.querySelector('ul').children.length
console.log(thirdWord)

const lastWord = document.querySelectorAll('li')[1].innerText
console.log(lastWord)

const finalPieceOfTheMessage = document.querySelector('ul').nextSibling
console.log(finalPieceOfTheMessage)
