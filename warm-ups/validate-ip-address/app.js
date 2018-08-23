// function validateIp(nums){
//     nums.split(".")
// }


const validIP = nums => {
    nums.split('.')
}

console.log(validateIp("172.16.254.1"))


// Class solutions:

// const isValidIP = str => {
//     const valid = str.split(".").map((IP) => {
//         console.log(IP)
//         if (IP <= 255 && IP >= 0) {
//             return IP
//         }
//     })
//     if (valid.join(".") === str && valid.length === 4) {
//         return `${str} IS a valid IP address`
//     } else {
//         return `${str} is NOT a valid IP address.`
//     }
// }


// console.log(isValidIP("172.16.254.1.50"))
// console.log(isValidIP("abc.16.254.1"))
// console.log(isValidIP("2.192.254.0"))
// console.log(isValidIP("500.16.400.1"))



// Another solution:

// function validateIp(attempt){
//     const isFourLong = attempt.split(".").length === 4
//     const inRange = attempt.split(".").every(segment => {
//         return segment >= 0 && segment <= 255
//     })

//     return isFourLong && inRange
// }