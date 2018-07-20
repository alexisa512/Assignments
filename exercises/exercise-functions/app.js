function addNum (num1, num2) {
    return (num1 + num2)
}

console.log(addNum(2, 3))

function biggestNum (num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

console.log(biggestNum(1,2,3))

function evenOrOdd (num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(evenOrOdd(4))
console.log(evenOrOdd(5))

function stringParam (string) {
    if (string.length <= 20) {
        return string + string
    } else {
        var halfString = Math.floor(string.length / 2)
        return string.slice (0, halfString)
    }
}

var test1 = "hello"

var test2 = "abcdefghijklmnopqrstuvwxyz"

console.log(stringParam (test1))
console.log(stringParam (test2))


