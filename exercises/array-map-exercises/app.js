// 1) Make an array of numbers that are doubles of the first array
var numbers = [2, 5, 100]

var doubled = numbers.map(function(arr){
    return arr * 2
})
console.log(doubled)

// 2) Take an array of numbers and make them strings
var toString = numbers.map(function(arr){
    return arr.toString()
})
console.log(toString)

var names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// 3) Capitalize each of an array of names
var capNames = names.map(function(arr){
    var lowerCase = arr.toLowerCase()
    return lowerCase[0].toUpperCase() + lowerCase.slice(1)
})
console.log(capNames)


// 4) Make an array of strings of the names

var names4 = [  
        {
            name: "Angelina Jolie",
            age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kayne West",
            age: 16
        },
        {
            name: "Bob Ziroll",
            age: 100
        }
    ]

var stringOfNames = names4.map(function(arr){
    return arr.name
})
console.log(stringOfNames)