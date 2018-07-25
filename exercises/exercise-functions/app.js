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


function fibonacci (n) {
  var fib = [1,1]
  var sumfib = 2
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i-1]+fib[i-2]
        sumfib = fib[i] + sumfib
    }
    console.log(fib)
    return sumfib
}
console.log(fibonacci(15))

function quadratic (a, b, c) {
    if (Math.pow(b,2)-4*a*c < 0) {
        console.log('non-real results')
        return
    }
    var x = [(-1*b + Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a),
             (-1*b - Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a)]
    return x
}
console.log(quadratic(1,1,-1))
console.log(quadratic(1,1,1))