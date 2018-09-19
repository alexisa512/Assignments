const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    capital: String,
    region: String,
    subregion: String,
    currencies: [String],
    languages: [String],
    flag: String,
    demonym: String,
    imgUrl: String,
    haveVisited: Boolean,
    wantToVisit: Boolean
})

module.exports = mongoose.model("country", countrySchema)