var firstName = "Lindy, Adelyn, Kazuhiro"
var lastName = "Ambrose, Landrum, Yanagita"

function danceKids (first, last) {
    first = first.split(', ')
    last = last.split(', ')
    var fullName = ""
    for (var i = 0; i < 3; i++) { 
        fullName = fullName.concat(first[i], " ", last[i], ", ")
    }
    fullName = fullName.slice(0, fullName.length - 2)
   return fullName 
}
console.log(danceKids(firstName, lastName))
// console.log(firstName, lastName)


var str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptatum officiis ex, quibusdam voluptates culpa accusantium quaerat dolorem odit minima cupiditate commodi corporis temporibus animi voluptatem ipsum! Ullam, placeat ad!"

function theCountAhAh(str) {
    // loop through the string to count the "the"s, end with .lastIndexOf
    var i = -1
    var counter = 0
    while (i < str.lastIndexOf("it")) {
        i = str.indexOf("it", i+1)
        if (i !== -1) {
            counter++
            console.log(counter + " AhAh")
        } else if (i === -1) {
            return
        }
    }
}
theCountAhAh(str)



var anything = "aLexiS"

function unjumble(name) {
    name = name.toLowerCase()
    name2 = name[0].toUpperCase()
    name2 = name2 + name.substr(1, name.length - 1)
    return name2

}
unjumble(anything)
console.log(unjumble(anything+"!"))