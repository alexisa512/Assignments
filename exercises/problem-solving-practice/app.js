// Write a function that takes an array of numbers and returns the largest (without using Math.max())
function largestArray (arr) {
var array = [5, 50, 15, 20, 1]
var largest = []
     for(var i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]}
        }
    console.log(largest)
}
largestArray()

// Write a function that takes an array of words and a character and return each word that has that letter present.
var lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]

function findALetter(arr, char) {
    var newWords = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].indexOf(char) !== -1){
            newWords.push(arr[i])
        }
    }
    return newWords
}
console.log(findALetter(lettersWithStrings, '!'))

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// isDivisible(4, 2) // => true  
// isDivisible(9, 3) // => true  
// isDivisible(15, 4) // => false  

function isDivisible (num1, num2) {
    if(num1 % num2 === 0) {
        return 'True'
    } else {
        return "False"
    }
}
console.log(isDivisible(4, 2))  
console.log(isDivisible(9, 3))   
console.log(isDivisible(15, 4)) 