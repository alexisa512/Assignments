var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array.
function lastVeggie(arr){
    arr.pop()
    return arr
}

console.log(lastVeggie(vegetables))

// Remove the first item from the fruit array.
function firstFruit(arr){
    arr.shift()
    return arr
}

console.log(firstFruit(fruit))

// Find the index of "orange."
function orange(arr){
   return arr.indexOf('orange')
}
var whatever = orange(fruit)
console.log(orange(fruit))

// Add that number to the end of the fruit array.
function addOrange(arr){
    arr.push(whatever)
    return arr
}
console.log(addOrange(fruit))

// Use the length property to find the length of the vegetable array. Log that to the console.

console.log(vegetables.length)
// Add that number to the end of the vegetable array.
console.log(vegetables.push(vegetables.length))
console.log(vegetables)
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log(food)

// Remove 2 elements from your new array starting at index 4 with one method.
console.log(food.splice(4, 2))
console.log(food)
// Reverse your array.
console.log(food.reverse())
// Log your array as a string to the console.