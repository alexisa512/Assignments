// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    var highNumsArray = arr.filter(function(num){
        if(num >= 5){
            return num
        }
    })
    return highNumsArray
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]  

// 2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    
}

evensOnly([3, 6, 8, 2]); /// [6, 8, 2]  