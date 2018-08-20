// Create a class for a player that has the following properties:

// name of type String

// totalCoins of type Number

// status of type String (options are Powered Up, Big,Small, and Dead)

// hasStar of type Boolean (Is a star active?)

// setName of type function - sets 'name' to "Mario" or "Luigi". Has a parameter called namePicked where you pass in "Mario" or "Luigi"

// gotHit of type function - this is called whenever the player is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)

// gotPowerup of type function - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up")

// gameActive of type Boolean, true by default, becomes false when status is Dead

// addCoin of function - adds a coin to totalCoins

// print of type function - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:

// Name: Luigi,
// Status: Small, etc, etc
// Use that class to create the object.


class Player {
    constructor(name, totalCoins, status) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = false;
        this.gameActive = true;
    }

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit(){
        if (this.hasStar){
            console.log("Your star protected you and is gone.")
            this.hasStar = false;
        } else if (this.status === "powered up"){
            this.status = "big";
        } else if (this.status === "big") {
            this.status = "small";
        } else if (this.status === "small"){
            console.log("You suck. You died.")
            this.status = "dead"
            this.gameActive = false
            clearInterval(intervalID)
        }
    }

    gotPowerup(){
        if(this.status === "small") {
            this.status = "big";
        } else if (this.status === "big"){
            this.status = "powered up";
        } else if (this.status === "powered up") {
            console.log("You have received a star. Woot!")
            this.hasStar = true;
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`);
    }

}

const mario = new Player("Mario", 5, "powered up");



function randomRange(){
    let number = Math.floor(Math.random() * 3)
    if(number === 0){
        mario.gotHit();
    } else if (number === 1) {
        mario.gotPowerup();
    } else {
        mario.addCoin();
    }
    mario.print();
}

setInterval(randomRange, 2000)

var intervalID = setInterval(randomRange, 2000);




