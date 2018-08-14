// Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.

function palindrome(str){
    //                         Reg ex?
    var without = str.replace(/[^0-9a-z]/gi, "");
    var arr = without.split("");
    var flip = arr.reverse().join("");

    return flip.toLowerCase() === without.toLowerCase()
}

isPalindrome("Star Rats!");  // true  
isPalindrome("palindrome");  // false  
isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!")