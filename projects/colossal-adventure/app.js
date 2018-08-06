var ask = require('readline-sync')

var userName = ask.question("Welcome to 'The Game!' What is your name? ")
    console.log(`Hi, ${userName}! Let's get playing! `)
// Declaration Section
var hp = 80
var enemies= [
    {name: "Dragon", health: 15},
    {name: "Dagron", health: 20},
    {name: "Trogdor the Burninator", health: 30}
]
var input = ""
var battleOptions = ["Fight", "Run away"]
var inventory = []
var items = ["flask", "sword", "shield", "gold star", "Hello Kitty backpack"]
var endGame = false


// The Game
while(hp > 0 && !endGame){
    input = ask.question("Press 'w' to walk. Enter 'print' to see stats. Enter 'exit' quit.")
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
    if(Math.random() <= 0.33){
        fight()
    } else {
        console.log('\x1Bc')
        console.log("You go for a nice, uneventful walk. ")
    }
}

function fight(){
    var enemy = getEnemy() 
    var active = true
    console.log(`${enemy.name} appeared.`)
    while(hp > 0 && enemy.health > 0 && active){
        console.log(`Your health: ${hp}  ${enemy.name}'s health: ${enemy.health}`)
        var userChoice = ask.keyInSelect(battleOptions, "What do you do?")
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
                    console.log("You got away safely. ")
                    active = false
                } else {
                    console.log(`You failed to get away and ${enemy.name} delivered damage.`)
                    hp -= attackPower()
                }
        }
        if (enemy.health <= 0){
            hp += 10
            if(enemy.health < 0){
                enemy.health = 0
            }
            console.log("Thou hast vanquished thine foe! As a reward, thou hast received 10 health points.") 
            console.log(`Your health: ${hp}  ${enemy.name}'s health: ${enemy.health}`)
            if (enemy.name === "Trogdor the Burninator") {
                inventory.push("thatched roof cottage repair kit")
                console.log("You have received a thatched roof cottage repair kit.")
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

