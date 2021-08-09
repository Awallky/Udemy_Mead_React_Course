const ADULT_AGE = 18
const DRINKING_AGE = 21
const isAdult = (age) => (age >= ADULT_AGE) ? 'yes': 'no'
const canDrink = (age) => (age >= DRINKING_AGE) ? 'yes': 'no'

module.exports = {
    isAdult,
    canDrink
}