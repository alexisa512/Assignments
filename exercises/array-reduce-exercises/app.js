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
console.log(final)

// 3) Turn an array of voter objects into a count of how many people voted
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

var voterCount = voters.reduce(function(final, num){
    return voters.name === yes
})