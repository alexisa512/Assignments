var balloon = {
    color: "gold",
    howMany: 1,
    isAlive: false,
    method: function() {
        return "This object is a " + this.color + " balloon.";
    }
}

var plant = {
    color: "green",
    howMany: 11,
    isAlive: true,
    method: function() {
        console.log("This object is a " + this.color + " plant.")
    }
}

var chair = {
    color: "teal and gray",
    howMany: 20,
    isAlive: false,
    method: function() {
        console.log("This object is a " + this.color + " chair.") 
    }
}

var computer = {
    color: "rose gold",
    howMany: 1,
    isAlive: false,
    method: function() {
        console.log("This object is a " + this.color + " laptop.")
    }
}

var fireExtinguisher = {
    color: "red",
    howMany: 1,
    isAlive: false,
    method: function() {
        console.log("This object is a " + this.color + " fire extinguisher.")
    }
}

var waterbottle = {
    color: "blue",
    cost: 8,
    isAlive: false,
    method: function() {
        console.log("This water bottle cost " + this.cost + " dollars.")
    }
}

var phone = {
    color: "rose gold",
    cost: 900,
    isAlive: false,
    method: function() {
        console.log("This " + this.cost " dollar phone is " + this.color ".") 
    }
}

var backpack = {
    color: "black and blue",
    weight: 10,
    isAlive: false,
    method: function() {
        console.log("The " + this.color + " backpack weighs " + this.weight + " pounds.")
    }
}