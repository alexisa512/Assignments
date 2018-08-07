// 1) Sort an array from smallest number to largest

var numbers = [1, 3, 5, 2, 90, 20]

var leastToGreatest = numbers.sort(function(a, b){
    return a - b
})
console.log(leastToGreatest)


// 2) Sort an array from largest number to smallest

var greatestToLeast = numbers.sort(function(a, b){
    return b - a
})
console.log(greatestToLeast)

// 3) Sort an array from shortest string to longest

var lengthSort = ["dog", "wolf", "by", "family", "eaten"]

var length = lengthSort.sort(function(a, b){
    return a.length - b.length
})
console.log(length)

// var shortToLong = lengthSort.sort(function(a, b){
//     return a - b
// })
// console.log(shortToLong)

// 4) Sort an array alphabetically

var alphabetically = lengthSort.sort(function(a, b){
    return a.localeCompare(b);
})
console.log(alphabetically)

// 5) Sort the objects in the array by age

var people = ([  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
])

var byAge = people.sort(function(a, b){
    return a.age - b.age
})
console.log(byAge)