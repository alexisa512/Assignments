const mongoose = require('mongoose')

const bountySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true,
    },
    bounty: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: yes,
        enum: ["sith", 'jedi']
    }
})

module.exports = mongoose.model("bounty", bountySchema)