// Write a function that takes an array as a parameter and returns a new array with the contents randomly "shuffled".


function shuffle (arr){
    const copyArr = [...arr];
    const newArr = [];
    while (copyArr.length > 0) {
        newArr.push(...copyArr.splice(Math.floor(Math.random() * copyArr.length), 1))
    }
    return newArr;
}


// another option:

function shuffle2(arr){
    const copyArr = [...arr]
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(...copyArr.splice(Math.floor(Math.random() * copyArr.length), 1))
    }
    return newArr
}

console.log(shuffle([1,2,3,4,5]))
console.log(shuffle2([1, 2, 3, 4, 5]))

// another option:

function scrambles(arr){
    const scramArr = arr;
    
    for(let i = scramArr.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1)); 
        const placeHolder = scramArr[i];
        scramArr[i] = scramArr[randomIndex];
        scramArr[randomIndex] = placeHolder;
    }
    console.log(scramArr)
}       

scrambles([1,2,3,4,5])