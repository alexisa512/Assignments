var balloon = {
    color: "gold",
    howMany: 1,
    isAlive: false,
    method: function() {
        return "This object is a" + this.color + "bal";
    }
}

var plant = {
    color: "green",
    howMany: 11,
    isAlive: true,
    method: function() {
        console.log("This object is a" + this.color)
    }
}

var chair = {
    color: "teal and gray",
    howMany: 20,
    isAlive: false,
    method: () {
        console.log("This object is a" + this.color)
    }
}

var computer = {
    color: "rose gold",
    howMany: 1,
    isAlive: false,
    method: () {
        console.log("This object is a" + this.color)
    }
}

var fireExtinguisher = {
    color: "red",
    howMany: 1,
    isAlive: false,
    method: () {
        console.log("This object is a" + this.color)
    }
}