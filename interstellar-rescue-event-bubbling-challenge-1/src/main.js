// complete the challenge here 👇


// 1. Prevent Hyperlink to Black Hole
const anchorEl = document.querySelector("#blackHoleLink")
anchorEl.addEventListener("click", event => {
    event.preventDefault()
    console.log(`Black Hole Avoided`)
})


// 2. Block Unauthorized Communications
const formEl = document.querySelector('#communicationForm')
formEl.addEventListener('submit', event => {
    event.preventDefault()
    console.log(`Unauthorized communication blocked!`)
})


// 3. Activate Rescue Beacon
const rescueBeaconEl = document.querySelector('#rescueBeaconButton')
rescueBeaconEl.addEventListener("click", () => {
    console.log('Rescue beacon activated!')
})

document.addEventListener("click", event => {
    const isBody = event.target.hasAttribute("cz-shortcut-listen")
    if (isBody) console.log("Rescue beacon deactivated!")
})

// 4. Retrieve Space Supplies
const supplyEls = document.querySelector("#suppliesContainer")
supplyEls.addEventListener("click", event => {
    event.stopPropagation()
    if (event.target.tagName === 'SPAN') console.log(event.target.textContent)
})


const supplyBtnEl = document.querySelector("#addSupplyButton")
supplyBtnEl.addEventListener("click", () => {
    let nextIndex = supplyEls.children.length + 1
    let spanEl = document.createElement("span")
    spanEl.textContent = `Supply ${nextIndex}`
    supplyEls.appendChild(spanEl)
})
