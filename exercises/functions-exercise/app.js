// // Write a function that accepts two numbers as parameters, and returns the sum.
// function sum(num1, num2) {
//     console.log(num1 + num2)
// }
// sum(3,5)
// // Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
// function largest(param1, param2, param3) {
//     console.log(Math.max(param1, param2, param3))
// }

// largest (4, 10, 5)
// // Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
// function evenOdd(number) {
//     if(number % 2 === 0) {
//         console.log("Even")
//     } else {
//         console.log("Odd")
//     }
// }
// evenOdd(15)
// evenOdd(4)
// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

// function string(str){
//     for (var i = 0; i < str.length; i++){
//         if(str.length <= 20){
//             console.log(str.concat(str));
//         } else {
//             console.log("ugh");
//         }
//     }
// }
// string(abcdefg)
var str = "abcdefg"
console.log(str.concat(str))