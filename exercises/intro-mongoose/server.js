const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(express.json())
app.use(morgan('dev'))

// Mongo DB Connect
mongoose.connect('mongodb://localhost:27017/intro-db', { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(err => console.log(err))

// Routes
app.use('/cars', require('./routes/testRoutes'))

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.post('/', (req, res) => {
//     res.send(req.body)
// })

app.listen(5200, () => {
    console.log("Server is running on port 5200")
})