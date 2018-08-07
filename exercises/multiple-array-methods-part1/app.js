
// Return each name and age with <li>'s.


var people = ([  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 29
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    },{
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 13
    },{
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
    }
  ])


  var over18 = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
  ]

// Return a list of everyone older than 18.

function olderThan18(arr){
    var peeps = arr.filter(function(person){
    // another option: 
    // return arr.filter(function(person){
    //     return person.age > 18
    // })
        if(person.age > 18){
            return person
        }
    
    })
    return peeps
}

// Have the new list sorted by last name.

module.exports = {
    people: people,
    olderThan18: olderThan18,
    over18: over18
}

    

