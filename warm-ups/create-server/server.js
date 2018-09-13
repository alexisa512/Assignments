const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4500;

app.use(bodyParser.json());

const dancers = [
    {
        firstName: "Lexi",
        age: 31,
        dance: "lindyhop"
    },
    {
        firstName: "Joseph",
        age: 28,
        dance: "balboa"
    },
    {
        firstName: "Cordon",
        age: 28,
        dance: "collegiate shag"
    },
    {
        firstName: "Jessie",
        age: 30,
        dance: "lindyhop"
    },

]

app.get('/dancers/', (req, res) => {
    res.send(dancers)
})

app.listen(4500, () => {
    console.log('ALOHA!')
})

