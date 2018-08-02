// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.

// countCode("aaacodebbb") -> 1 
// countCode("codexxcode") -> 2 
// countCode("cozexxcope") -> 2


function countCode(str) {
    return str.match(/co.e/gi).length
}
// g = match to the whole string (without it will only do the first match)
// i = ignores case (C or c)
// . = placeholder
// .length = will 
// 
console.log(countCode('cosssdecode')) // --> 1
console.log(countCode('codexxcodex')) // --> 2
console.log(countCode('co#exxcosexxdco*e')) // --> 2


// Another way:
function altCodeCount(str){
    var count = 0
    for (var i = 0; i <str.length; i++){
        if((i+3) < str.length && string[i] === 'c' && string[i + 1] === 'o' && str[i + 3] === 'e'){
            count++
            i += 4
        }
    }
    return count;
}

console.log(countCode('cosssdecode')) // --> 1
console.log(countCode('codexxcodex')) // --> 2
console.log(countCode('co#exxcosexxdco*e')) // --> 2


// A simpler way:
function altCodeCount(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] + str[i + 1] + str[i + 3] === 'coe'){
          count++
      }
    }
    return count;
  }
  
  console.log(altCodeCount('Cosssdecode')) // --> 1
  console.log(altCodeCount('codexxcodex')) // --> 2
  console.log(altCodeCount('codexxcosexxdco*e')) // --> 2
  
