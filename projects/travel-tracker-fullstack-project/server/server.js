const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const countryRoutes = require('./routes/countryRoutes')

server
    .use(express.json())
    .use(morgan('dev'))
    .use('/country', countryRoutes)


mongoose
    .connect("mongodb://localhost: 27017/country", { useNewUrlParser: true })
    .then(() => console.log("Connected to database. WOOT!"))
    .catch(err => console.log(err))



server.listen(3030, () => {
    console.log("Listening on port 3030.")
})