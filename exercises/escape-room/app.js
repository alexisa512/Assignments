var ask = require('readline-sync')

var userName = ask.question("What is your name? ")

var isAlive = true

var options = ["Put hand in hole", "Find the key", "Open the door"]

while (isAlive){
    index = ask.keyInSelect(options, "What do you want to do? ")
        if(index === 0){
            isAlive = false
            console.clear()
            console.log("You died.")
        } else if(index ===1){
            var foundKey = true
            console.clear()
            console.log("You found the key!")
        } else if(index === 2 && foundKey){
            console.clear()
            console.log("You unlocked the door and are free!")
            isAlive = false
        } else {
            console.log("Try again")
        }
}