// complete the challenge here 👇

import { pikachu, charmander, newSkills } from '../public/data'
import {
  renderPetPetAttributes,
  renderPetHealthIndex,
  renderSkillList,
  renderPetProtectionStatus,
  renderBlazeAbilityExist
} from './render'

// 1. Pet Attribute List
export function listPetAttributes (pet) {
  return Object.keys(pet)
}


renderPetPetAttributes(listPetAttributes(pikachu))

// 2. Pet Health Index Calculation
export function calculatePetHealth (petStatus) {
  const statusAttrs = Object.keys(petStatus)
  return statusAttrs.reduce((accHealth, key) => accHealth + petStatus[key], 0) / statusAttrs.length
}


renderPetHealthIndex(calculatePetHealth(charmander.status))


// 3. Pet Skill Upgrade
export function upgradePetSkills (currentSkills, newSkills) {
  return {
    ...currentSkills,
    ...newSkills
  }
}


renderSkillList(upgradePetSkills(pikachu.skills, newSkills))

// 4. Rare Pet Protection
export function protectRarePet (rarePet) {
  return Object.freeze(rarePet)
}


renderPetProtectionStatus(protectRarePet(pikachu))  

// 5. Pet Special Ability Check
export function checkSpecialAbility (pet, abilityName) {
  return pet.abilities.hasOwnProperty(abilityName)
}


renderBlazeAbilityExist(checkSpecialAbility(charmander, 'blaze'))
