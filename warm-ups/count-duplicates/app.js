// Create a function that takes a string and returns the number of alphanumeric characters that occur more than once.

const duplicateCount = str => {
    // Make it Lowercase
    let dupArr = [];
    const strCopy = str.toLowerCase()
    for(let i = 0; i < strCopy.length; i++){
      let firstIndex = strCopy.indexOf(strCopy[i])
      let lastIndex = strCopy.lastIndexOf(strCopy[i])
      //indexOf(str[i]) === lastIndex(str[i]) - Compare indexes to see if duplicate
      if(firstIndex !== lastIndex){
      // Check to see if it has already been added to the duplicates array so we don't re-add it
        if(dupArr.indexOf(str[i]) === -1){
        // push the duplicate into the duplicate array
          dupArr.push(strCopy[i])
        }
      }
    }
    // return the amount of duplicate results
    return dupArr.length
}





// another option:
// const countDups = str => {
//     let dups = {}
//     let strCopy = str.toLowerCase()
//     let result = 0;
 
//     for(let i = 0; i < strCopy.length; i++){
//         let currentChar = strCopy[i]
//         if(dups[currentChar] === 1){
//             result++
//         }
//         if(!dups[currentChar]){
//             dups[currentChar] = 1
//         }
//     }
//     return result
//  }


console.log(duplicateCount("abcde")) // ➞ 0
console.log(duplicateCount("aabbcde")) // ➞ 2
console.log(duplicateCount("Indivisibilities")) // ➞ 2


 

