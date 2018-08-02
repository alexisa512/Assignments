var inquire = require('readline-sync')

var mood = inquire.question("how are you? ")
console.log('you are feeling '+mood)