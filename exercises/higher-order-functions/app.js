var cars = [  
    {
       make: "ford",
       model: "E150",
       year: 2000
    },
    {
       make: "chevy",
       model: "malibu",
       year: 2017
    },
    {
       make: "chevy",
       model: "malibu",
       year: 2003
    },
    {
       make: "ford",
       model: "E150",
       year: 1999
    },
    {
       make: "chevy",
       model: "sedan",
       year: 2009
    },
]

// // Use .forEach() to replace the following for loop.

// // for (var i = 0; i < cars.length; i++) {  
// //   console.log(`${cars[i]} goes vroom`);
// // }
// cars.forEach(function(car){
//     console.log(`${car.make} goes vroom`)
// })

// // Use .map() to replace the following for loop.

// var angryCars = [];

// // for (var i = 0; i < cars.length; i++) {  
// //   angryCars.push(cars[i].make.toUpperCase());
// // }
// angryCars = cars.map(function(car){
//              return car.make.toUpperCase() 
               
// })

// console.log(angryCars)



// // Use .filter() to replace the following for loop.

// var newCars = [];

// // for (var i = 0; i < cars.length; i++) {  
// //   if (cars[i].year > 2005){
// //     newCars.push(cars[i]);
// //   }
// // }

// newCars = cars.filter(function(car){
//     return car.year > 2005
// })
// console.log(newCars)

// // Use .find() to replace the following for loop.

// // for (var i = 0; i < cars.length; i++) {  
// //   if (cars[i].model === "E150"){
// //     var coolVan = cars[i];
// //     break;
// //   }
// // }
// coolVan = cars.find(function(car){
//     return car.model === "E150"
// })
// console.log(coolVan)

// // Use .some() to replace the following for loop.

// // for (var i = 0; i < cars.length; i++) {  
// //   if (cars[i].model === "E150"){
// //     console.log("It is true that there is one or more E150s");
// //     break;
// //   }
// // }
// var some = cars.some(function(car){
//     return car.model === "E150"
// })
// console.log(some)
// // Use .every() to replace the following for loop.

// // for (var i = 0; i < cars.length; i++) {  
// //   if (cars[i].model != "E150"){
// //     console.log("It is false that every car is an E150");
// //     break;
// //   }
// // }

// var every = cars.every(function(car){
//         return car.model === "E150"
// })
// console.log(every)

// Use .reduce() to replace the following for loop and carTotals definition.

var numberOfFords = 0;  
var numberOfChevys = 0;

var ford = cars.reduce(function(total, next){
    if(next.make === "ford"){
    return total++
    } 
})

var chevy = cars.reduce(function(total, next){
    if(next.make === "chevy"){
    return total++
    } 
})

console.log(ford)
console.log(chevy)

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].make === "ford"){
//     numberOfFords ++;
//   }
//   if (cars[i].make === "chevy"){
//     numberOfchevys ++;
//   }
// }

// var carTotals = { numberOfFords: numberOfFords, numberOfChevys: numberOfChevys }  