// Part 1 - Server Setup and GET & POST routes.
// Since we don't have a good way to tell the server which item we want to PUT and  DELETE yet, we'll start out just by writing the GET and POST endpoints.

// Write a GET endpoint that gets all bounties from the array and sends them to the client.
// Write a POST endpoint that adds a new bounty object to the array of bounties.
// Remember, you'll have to play the part of the database and add an id property to the incoming bounty before saving it to the array of bounties. This way you'll be able to easily look it up by its id property in order to update and delete it later.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const bounties = [
    {
        firstName: "Nate",
        lastName:   "the Instructor",
        living: true,
        bounty: 10000,
        type: 'Sith',
        id: uuid()
    },
    {
        firstName: "Yoda",
        lastName:   "the One and Only",
        living: true,
        bounty: 50000,
        type: 'Jedi',
        id: uuid()
    },
    {
        firstName: "Alexis",
        lastName:   "Student Extraordinaire",
        living: false,
        bounty: 20000,
        type: 'Jedi',
        id: uuid()
    },
]

// Get all bounties
app.get('/bounty/', (req, res) => {
    res.send(bounties)
})

// Get a single bounty
app.get('/bounty/:id', (req, res) => {
    const bountiesCaught = bounties.find(bounty => bounty.id === req.params.id)
    res.send(bountiesCaught)
})

// Post a new bounty
app.post('/bounty', (req, res) => {
    req.body.id = uuid()
    bounties.push(req.body)
    res.send(bounties)
})

// Update an existing bounty
app.put('/bounty/:id', (req, res) => {
    const bountyToUpdate = bounties.find(bounty => bounty.id === req.params.id);
    const bountytoReplace = bounties.findIndex(bounty => bounty.id === req.params.id);
    const updatedObject = Object.assign(bountyToUpdate, req.body);
    bounties.splice(bountytoReplace, 1, updatedObject);
    res.send(bounties) 
})

app.delete('/bounty/:id', (req, res) => {
    // console.log(req.params)
    const bountyToDelete = bounties.findIndex(bounty => bounty.id === req.params.id);
    bounties.splice(bountyToDelete, 1)
    res.send(bounties)
    console.log(bounties)
})


app.listen(4000, () => {
    console.log('It works!')
})

