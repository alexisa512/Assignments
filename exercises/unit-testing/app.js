
// function addS(arr){
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "string"){
//             newArr.push(`${arr[i]}s`)
//         } else {
//             return 'no numbers'
//         }
//     }
//     return newArr
// }


// function addS(arr){
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "number"){
//             return 'no numbers'
//         } else if (arr[i].lastIndexOf('s') !== arr[i].length - 1){
//             newArr.push(`${arr[i]}s`)
//         } else {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// ALSO WORKS:

function addS(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            return 'no numbers'
        } else if (arr[i].endsWith('s')){
            newArr.push(`${arr[i]}`)
        } else {
            newArr.push(`${arr[i]}s`)
        }
    }
    return newArr
}





// module.exports = addS (single thing)
module.exports = { addS: addS } //(multiple things)

// module.exports 