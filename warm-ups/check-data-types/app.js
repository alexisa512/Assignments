// Given a multi-dimensional array containing only primitive data types (strings, booleans, and numbers), write a function that returns whether EACH element within each subarray belongs to the same data type.


// first capture the date type of the item of the first array
function checkTypes(arr) {
    // Nested for loop to compare it against the initial data type  
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
         // if !== firstType return false
        if(typeof arr[i][j] !== typeof arr[0][0]){
          return false
        }
      }
    }
    // return true
    return true
}

// Other option:
const checkTypes = arr => arr
    .map(val => typeof val[0])
    .every((val, i, arr) => val === arr[0])



    
const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]
checkTypes(multiD1)  
// returns false (inner arrays aren't consistent with each other's data types)
    
const multiD2 = [[true,false,true],[false,false,true]]
checkTypes(multiD2)  
// returns true (each inner array contains the same data type as the others)
    