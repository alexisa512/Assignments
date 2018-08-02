//Preliminaries
//1 Write a for loop that prints to the console the numbers 0 through 9.

for (var i = 0; i <=9; i++){
    console.log(i)
}

//2 Write a for loop that prints to the console 9 through 0.

for (var i = 9; i >=0; i--){
    console.log(i)
}

//3 Write a for loop that prints these fruits to the console. 

var fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

// Bronze Medal
//1 Write a for loop that will push the numbers 0 through 9 to an array.

var pushTo = []
for (var i = 0; i <= 9; i++) {
    console.log(pushTo.push)
}


//2 Write a for loop that prints to the console only even numbers 0 through 100.

for (var i = 0; i <= 100; i+=2) {
    console.log(i)
}

//3 Write a for loop that will push every other fruit to an array. 

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var array = []
for (i = 0; i < fruit.length; i+=2) {
    array.push(fruit[i])
}
console.log(array)

// 1 Write a loop that will print out all the names of the people of the people array

var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//   for (i = 0; i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name)
//   }

// // 2 Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var name = []
var occupation = []
for(i = 0; i < peopleArray.length; i++) {
    name.push(peopleArray[i].name)
    occupation.push(peopleArray[i].occupation)
}
// console.log(name)
// console.log(occupation)

// 3 Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".

var otherNames = []
var otherOccupations = []
for (i = 0; i < peopleArray.length; i += 2 ) {
    // if (i - name.indexOf("Harrison Ford") % 2 === 0) {
    //     console.log(otherNames.push(name[i]))
    // } 
    // if (i - occupation.indexOf("Singer") % 2 === 0) {
    //     console.log(otherOccupations.push(occupation[i]))
    // }
    otherNames.push(name[i])
}
for (i = 1; i < peopleArray.length; i += 2 ) {
    otherOccupations.push(occupation[i])
}

console.log(otherNames)
console.log(otherOccupations)

Given a grid like the previous ones, write a for loop that would change every number to an x.

var arr = [[0, 0, 0], 
        [0, 0, 0], 
        [0, 0, 0]]

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        arr[i][j] = "x"
    }
}
console.log (arr)