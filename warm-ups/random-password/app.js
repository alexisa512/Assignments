var password = ""
var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"

function randomPassword(n) {
    for (i = 0; i < n; i++){
       password += options.charAt(Math.floor(Math.random() * options.length))
    }
    return password
}
console.log(randomPassword(8))



// Another Option:
var password = ""
var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"

function randomPassword(n) {
    for (i = 0; i < n; i++){   
        password += options[Math.floor(Math.random() * options.length)]
    }
    return password
}


// Another option:
// SUPER ADVANCED. We haven't learned this yet.


// function passwordGenerator (length) {
//     var t = []
//     for (var i = 0; i < lenth; i++) {
//         t.push(Math.floor(Math.random() (122-33) +33))
//     }
//     return String.fromCharCode(...t)
// }

// console.log(passwordGenerator(10))




