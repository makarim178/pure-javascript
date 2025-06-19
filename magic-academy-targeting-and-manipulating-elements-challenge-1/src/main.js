// complete the challenge here 👇


// 1. Discover the Enchanted Scroll
const scrollEl = document.querySelector('#scroll')
console.log(scrollEl)

// 2. Decipher the Ancient Spell
const txtScrollEl = scrollEl.textContent
console.log(txtScrollEl)

// 3. Rewrite the Spell
scrollEl.textContent = "Abracadabra!"

// 4. Reveal the Magic Attribute
const magicAttr = scrollEl.dataset.magic
console.log(magicAttr)

// 5. Enchant the Scroll's Appearance
scrollEl.color = "blue"

// 6. Bestow a Magical Class
scrollEl.classList.add("enchanted")

// 7. End the Game with a Magical Finale

const paragraph = document.createElement("p")
paragraph.textContent = "Congratulations! You have mastered the DOM Magic!"
paragraph.id = "msg"
paragraph.dataset.magic = "finale"
paragraph.style.backgroundColor = "green"
paragraph.style.color = "white"
document.body.appendChild(paragraph)