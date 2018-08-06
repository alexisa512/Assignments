// Create a function that:
// allows the user to enter new words and saves them into the original object (be sure to pass the object in as a parameter). The function should not allow duplicate words to be stored in the dictionary (This includes case-sensitivity).
// Allows the user to look up words in the dictionary and see the definition of that word.

var dictionary = {}

function addEntry(word, definition){
    dictionary[word] = definition;
}

function lookItUp(key){
    return(key + ': ' + dictionary[key])
}

console.log(dictionary)

addEntry('hello', 'A greeting');
addEntry('pig', 'a cute farm animal');
console.log(dictionary)
addEntry('goodbye', 'A farewell')
console.log(lookItUp('hello'))

// other option:
function addEntry(word, definition){
    if(dictionary.hasOwnProperty(word)){
        dictionary[word] = definition;
    }
}