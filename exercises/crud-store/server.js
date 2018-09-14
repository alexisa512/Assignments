const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const inventoryRoutes = require('./routes/inventoryRoutes')
const inventory = require('./models/inventory')

server
    .use(express.json())
    .use('/inventory', inventoryRoutes)



mongoose
    .connect("mongodb://localhost:7000/inventory", { useNewUrlParser: true })
    .then(() => console.log("connected to database"))
    .catch(err => console.log(err))


    

server.listen(7000, () => {
    console.log("Listening on port 7000")
})