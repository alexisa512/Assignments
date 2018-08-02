// var ask = require("readline-sync");

// var options = ['pick flowers', 'shoot guns', 'fight bears'];
// var option = 'undecided';

// while(option != 'fight bears'){
//   ask.keyInSelect(options, "What would you like to do today?: ");
//   if(option = 'pick flowers'){
//     console.log("You pick some flowers. You make a bouquet.");
//   } else {
//     console.log("You shoot guns.");
//   }
// }


// console.log("You fought a bear and got beat up!");

var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = '';

while(option !== 'fight bears'){
  var i = ask.keyInSelect(options, "What would you like to do today?: ");
  option = options[i]
  if(option === 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
  } else if (option === 'shoot guns') {
    console.log("You shoot guns.")
  } else if (option === 'fight bears') {
    console.log("You fought a bear and got beat up!");
  } else {
    console.log("Please select an option")
  }
} 

