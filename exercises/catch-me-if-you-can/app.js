// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
// var test = function sum (num1, num2){
//     return num1 + num2
// }

function sum(num1, num2) {
    try {
        if (!num1 || !num2){
            throw "You need to enter two numbers"
        } else if(typeof num1 === "number" && typeof num2 === "number"){
            return num1 + num2
        } else {
            throw "You need to enter both numbers"
        }
    }
    catch (error){
        console.log(error)
    }
    finally {
        console.log("Run anyway")
    }
}

console.log(sum(1, 2))

