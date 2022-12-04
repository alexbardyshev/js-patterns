// This pattern is very pequilar for JS
// Using this pattern we can create new objects with backbones of other objects

const car = {
  wheel: 4,

  init() {
    console.log(`I've got ${this.wheel} wheel(s). My owner is ${this.owner}`)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Alex',
  }
})

console.log(carWithOwner.__proto__ === car)

carWithOwner.init()
