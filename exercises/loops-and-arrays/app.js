function createEvenArray (highestNum) {
    var arr = []
    for (i = 2; i <= highestNum; i += 2){
        arr.push(i)
    }
    return arr
}
// console.log(createEvenArray(20))

function addOdds (evensOnlyArray) {
    var odds = []
    for (i = 0; i < evensOnlyArray.length; i++) {
        odds.push(evensOnlyArray[i]+1)
    }
        if (evensOnlyArray[0] === 2) {
            odds.push(1)
        }
    return evensOnlyArray.concat(odds)
}
function sortNums(numberArray) {  
    return numberArray.sort(function(a, b){return a-b});
}

console.log(sortNums(addOdds(createEvenArray(17))))

