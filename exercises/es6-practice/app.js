// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John").

// John is the pet owner, and his name should be stored differently than the other names.

const name = 'John'
let age = 101
const pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++){
  const pet = {type: pets[i]}
  let name
  if (pets[i] === "cat"){
    name = "fluffy"
  } else {
    name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}
console.log(petObjects)

// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

const vegetables = carrots.map(carrot => {
  return {type: "carrot", name: carrot}
})

console.log(vegetables)

// Re-write this .filter() using a fat arrow function:

const people = [
    {
        name: 'Princess Peach',
        friendly: false
    },
    {
        name: 'Luigi',
        friendly: true
    },
    {
        name: 'Mario',
        friendly: true
    },
    {
        name: 'Bowser',
        friendly: false
    }
]

const friends = people.filter(person => !person.friendly)
console.log(friends)

// re-write the following functions to be fat arrow functions:

const doMathSum = (a, b) => a + b

const produceProduct = (a, b) => a * b

console.log(doMathSum(2,2))
console.log(produceProduct(2,2))

// write a functions that takes a firstName, a lastName, an age and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

const str = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

console.log(str("Alexis", "Landrum", 31))
console.log(str())

// Use the shorthand syntax to make the following code block take up one line.

const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

const dogs = animals.filter(animal => animal.type === "dog" ? true : false)
console.log(dogs)

// Write a function that will take `location` and `name` and output this if `location="Hawaii"` and `name="Janice"`: ``` Hi Janice!
// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

const trip = (location, name) => `Hello ${name}! Welcome to ${location}. I hope you enjoy your stay. Please let the Grand Poo-bah of ${location} know if you need anything.`

console.log(trip("Greece", "Alexis"))