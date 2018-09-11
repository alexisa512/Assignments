const express = require('express');
const app = express();
const bodyParser = require('bodyParser');

// Mock Database
const sockStore = [
    {
        type: 'plain',
        cost: 200
    },
    {
        type: 'polka-dot',
        cost: 1000
    }
]


// Middleware
app.use(bodyParser.json())



// Routes
app.get('/socks', (request, response) => {
    response.send('Hello World stuff');
})

app.get('/socks/:id', (request, response) => {
    // console.log(req.params)
    const foundSock = sockStore.filter(sock => sock.id === req.params.id)
    res.send(foundSock[0])
// response.send is the equivalent of "return". It ends the function.
// if you need something specific, include a ":id" after the homepage /.

app.post('/socks', (req, res) => {
    console.log(req.body)
    sockStore.push(req.body)
    res.send(sockStore)
})
// You will never have an id on a post request because it suggests it already exists.
// saves the users request object into the database
// returns whatever the api is designed to return on POST

app.put('/socks:id', (req, res) => {

})
// You will USUALLY have an id at the end because you're updating a specific item. If you don't have an ID, you'll be updating an entire collection.


app.delete('/socks/:id' (req, res) => {

})


// Listen
app.listen(5000, ()=> {
    console.log("It's working!")
})