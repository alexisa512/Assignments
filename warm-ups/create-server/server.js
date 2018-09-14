const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4500;
const uuid = require('uuid/v4')

app.use(bodyParser.json());

const dancers = [
    {
        firstName: "Lexi",
        age: 31,
        dance: "lindyhop",
        id: uuid()
    },
    {
        firstName: "Joseph",
        age: 28,
        dance: "balboa",
        id: uuid()
    },
    {
        firstName: "Cordon",
        age: 28,
        dance: "collegiate shag",
        id: uuid()
    },
    {
        firstName: "Jessie",
        age: 30,
        dance: "lindyhop",
        id: uuid()
    },

]

app.get('/dancers/', (req, res) => {
    res.send(dancers)
})

app.listen(4500, () => {
    console.log('ALOHA!')
})

