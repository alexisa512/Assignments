// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

var arr1 = [3, 6, 8, 2]

var highNumsArray = arr1.filter(function(num){
    if(num >= 5){
        return num
    }
})
console.log(highNumsArray)



// 2) Given an array of numbers, return a new array that only includes the even numbers.
var arr2 = ([3, 6, 8, 2]); /// [6, 8, 2]

var evensOnly = arr2.filter(function(num){
    if(num % 2 === 0){
        return num
    }
})
console.log(evensOnly)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

var strings = ["dog", "wolf", "by", "family", "eaten", "camping"]

var fiveChars = strings.filter(function(str){
    if(str.length <= 5){
        return str
    }
})
console.log(fiveChars) 

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

var illuminati = [  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]

var belong = illuminati.filter(function(str){
    if(str.member){
        return str
    }
})
console.log(belong)

// 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)

var people = [  
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

var ofAge = people.filter(function(num){
    if(num.age >= 18){
        return num
    }
})
console.log(ofAge)