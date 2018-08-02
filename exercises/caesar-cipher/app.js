// understand the question
//     break it down
// pseudo-code    
//     pick one part from the break down
// follow through
//     we go back to step one
// look back (Other possible solutions)

var ask = require("readline-sync")

var phrase = ask.question("Enter a phrase you would like me to encrypt")
var shift = ask.questionInt("How many letters should the phrase shift?: ")

function caesarCipher (str, shiftNumber) {
    // declare empty string to build
    var encrypted = ""
    // declare a fariable that holds the alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    // loop/iterate through the string
    for(var i = 0; i < str.length; i++) {
        // check letter exists in the alphabet
        if (str.indexOf(str[i]) !== -1) {
            var currentIndex = alphabet.indexOf(str[i])
            // shift it the appropriate amount to the right
            encrypted += alphabet[(currentIndex + shift) % 26]
        } else {
            encrypted += str[i]
        }

    }
    // return final encrypted string

}

console.log(caesarCipher(phrase, shift))