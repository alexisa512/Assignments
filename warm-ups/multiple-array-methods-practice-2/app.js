const peopleAndPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];

// Create an array of everyone that has at least one dog and sort them by age.
const peopleWithDogs = peopleAndPets.filter(person => {
    const dogsOnly = person.pets.filter(pet => {
        return pet.type === "dog"
    }) 

    return dogsOnly.length > 0
})

const sorted = peopleWithDogs.sort((a,b) => {
    return a.age > b.age
})
console.log(sorted)

// Create an array of pets' first names.
// Display the pets' names in <li>s.

const firstNames = peopleAndPets.reduce((agg, value) => {
    const names = value.pets.reduce((agg, value) => {
        return [...agg, value.name]
        return agg.concat(value.name)
        
    }, [])
    return [...agg, names]
    return agg.concat(names)
}, [])
console.log(firstNames)

const liArray = firstNames.map(name => `<li>${name}</li>`)
console.log(liArray)