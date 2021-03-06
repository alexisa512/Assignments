// 1) Turn an array of numbers into a total of all the numbers

var numbers = [1, 2, 3, 4, 5, 6];

var total = numbers.reduce(function(a, b){
    return a + b
})
console.log(total)

// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr){
    return arr.reduce(function(final, num){
        final += num.toString()
        return final
    },"")
}
console.log(stringConcat([1, 2, 3]))

// 3) Turn an array of voter objects into a count of how many people voted
var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

var voterCount = voters.reduce(function(final, num){
    return final += num.voted
}, 0)
console.log(voterCount)


// booleans will be cohersed into numbers if added to numbers
//     true = 1
//     false =0
// numbers will be cohersed into strings if added strings
//     1 = "1"
//     console.log( 1 + "2" )

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

var shoppingSpree = wishlist.reduce(function(total, next){
        return total += next.price
}, 0)


console.log(shoppingSpree) // 227005 

// 5) Given an array of arrays, flatten them into a single array

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

var singleArr = arrays.reduce(function(total, next){
    return total.concat(next)
})

console.log(singleArr)
// ["1", "2", "3", true, 4, 5, 6];  

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/

var voterObject = voters.reduce(function(total, next){
        if(next.age >= 18 && next.age <= 25){
            total.youth += 1
            total.youngVotes += next.voted
        } else if (next.age >= 26 && next.age <= 35){
            total.mids += 1
            total.midVotes += next.voted
        } else if (next.age >= 36 && next.age <= 55){
            total.olds += 1
            total.oldVotes += next.voted
        }
        return total
}, {
    youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0 
})
console.log(voterObject) 