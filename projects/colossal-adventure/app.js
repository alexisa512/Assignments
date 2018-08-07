var ask = require('readline-sync')

var userName = ask.question("Welcome to 'The Game!' What is thy name? ")
    console.log(`Greetings, ${userName}! The area is under attack from fiendish foes! They are destorying the villages and driving the peasants from their cottages! Thine job is to defeat all the foes thou cometh across before they can lay waste to all the land! Thou and thine opponent wilt both receive damage in battle. May the best man or monster win! `)
// Declaration Section
var hp = 60
var enemies= [
    {name: "Dragon", health: 15},
    {name: "Dagron", health: 20},
    {name: "Trogdor the Burninator", health: 30}
]
var input = ""
var battleOptions = ["Fight", "Run away"]
var inventory = []
var items = ["flask", "sword", "shield", "gold star", "Hello Kitty backpack", "cake", "dinglehopper"]
var endGame = false


// The Game
while(hp > 0 && !endGame){
    input = ask.question("\nPress 'w' to walk. \nEnter 'print' to see stats. \nEnter 'exit' to quit. \n")
    if (input === 'w'){
        walk()
    }
    if(input === 'exit'){
        endGame = true
    }
    if(input === 'print'){
        console.log(`${userName}: \nHealth: ${hp}, \nInventory: ${JSON.stringify(inventory)}`)
    }   
}

// Functions
function walk(){
    if(Math.random() <= 0.5){
        fight()
        // console.log('\x1Bc')
    } else if (Math.random() <= 0.66){
        console.log("\nThou walkest through a meadow and decide to take a nap.")
    } else if (Math.random() <= 0.83){
        console.log("\nThou goes for a walk past a deserted village. ")
    } else {
        console.log("\nThou walkest up a mountain and find some old ruins.")
    }
}


function fight(){
    var enemy = getEnemy() 
    var active = true
    console.log('\x1Bc')
    console.log(`\n${enemy.name} appeared.`)
    while(hp > 0 && enemy.health > 0 && active){
        console.log(`Thine health: ${hp}  \n${enemy.name}'s health: ${enemy.health}`)
        var userChoice = ask.keyInSelect(battleOptions, "What dost thou do?")
        console.log('\x1Bc')
        switch(userChoice){
            case 0:
                console.log("CHAAAAAAARGE! ")
                hp -= attackPower()
                enemy.health -= attackPower()
                break;
            case 1:
                console.log('Run ya sniveling coward!')
                if(Math.random > .5){
                    console.log("Thou got away safely. ")
                    active = false
                } else {
                    console.log(`Thou hast failed to get away and ${enemy.name} delivered damage.`)
                    hp -= attackPower()
                }
        }
        if(enemy.health <= 0){
            hp += 10
            enemy.health = 0
            console.log("Thou hast vanquished thine foe! As a reward, thou hast received 10 health points.") 
            console.log(`Thine health: ${hp}  ${enemy.name}'s health: ${enemy.health}`)
                if (enemy.name === "Trogdor the Burninator") {
                    inventory.push("thatched roof cottage repair kit")
                    console.log("Thou hast received a thatched roof cottage repair kit.")
                } else {
                    var received = getItem()
                    inventory.push(received)
                    console.log(`Thou hast received a ${received}.`)
                }

            var enemiesLeft = false
            enemies.forEach(function(foe){
                if(foe.health > 0){
                    enemiesLeft = true
                }
            })

            if(!enemiesLeft){
                console.log("YOU WON!")
                endGame = true
            }

        } else if (hp <= 0){
            console.log("You have been BURNINATED!!!")
        }
    }
}


function getEnemy(){
    var num = Math.floor(Math.random() * enemies.length)
    if(enemies[num].health === 0){
        return getEnemy()
    }
    return enemies[num]
}

function attackPower(){
    return Math.floor(Math.random() * 10) + 5
}

function getItem(){
    var num = Math.floor(Math.random() * items.length)
    return items[num]
}

