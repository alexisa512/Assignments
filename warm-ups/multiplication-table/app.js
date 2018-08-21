// Write a function that returns a 10 X 10 multiplication table (2D array).

function multTable (){
    const table = []
    for(let i = 1; i < 10; i++){
        const tempArray = []
        for(let j = 1; j < 11; j++){
            tempArray.push(i * j)
        }
        table.push(tempArray)
    }
    return table
}

console.log(multTable())