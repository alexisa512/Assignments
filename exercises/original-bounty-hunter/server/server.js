const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const bountyRoutes = require('./routes/bountyRoutes')
const bounty = require('./models/bounty')

server
    .use(express.json())
    .use('/bounty', bountyRoutes)


mongoose
    .connect("mongodb://localhost:4000/bounty", { useNewUrlParser: true })
    .then(() => console.log('connected to database'))
    .catch(err => console.log(err)) 
        




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
        living: true,
        bounty: 20000,
        type: 'Jedi',
        id: uuid()
    }
]

// // Get all bounties
// app.get('/bounty/', (req, res) => {
//     res.send(bounties)
// })

// // Get a single bounty
// app.get('/bounty/:id', (req, res) => {
//     const bountiesCaught = bounties.find(bounty => bounty.id === req.params.id)
//     res.send(bountiesCaught)
// })

// // Post a new bounty
// app.post('/bounty', (req, res) => {
//     req.body.id = uuid()
//     bounties.push(req.body)
//     res.send(bounties)
// })

// // Update an existing bounty
// app.put('/bounty/:id', (req, res) => {
//     const bountyToUpdate = bounties.find(bounty => bounty.id === req.params.id);
//     const bountytoReplace = bounties.findIndex(bounty => bounty.id === req.params.id);
//     const updatedObject = Object.assign(bountyToUpdate, req.body);
//     bounties.splice(bountytoReplace, 1, updatedObject);
//     res.send(bounties) 
// })

// app.delete('/bounty/:id', (req, res) => {
//     // console.log(req.params)
//     const bountyToDelete = bounties.findIndex(bounty => bounty.id === req.params.id);
//     bounties.splice(bountyToDelete, 1)
//     res.send(bounties)
//     console.log(bounties)
// })


app.listen(4000, () => {
    console.log('It works!')
})

