// Write a function called antiCaps which accepts a string and returns a string. The purpose of the function is to invert the capitalization of each letter in a string.

// Here is a helper function that will return true if the letter is uppercase, and false if the letter is lowercase:

function isCaps(letter) {  
    return letter === letter.toUpperCase();
  }

function antiCaps(str) {
    var newStr = ""
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }  
    return newStr    
}

console.log(antiCaps('Hello'))// hELLO  
console.log(antiCaps('racEcar')) // RACeCAR  
console.log(antiCaps('bAnAnA')) // BaNaNa 


// Another way:
// Change line 12 to
    // if(isCaps(str[i])) {

    // }