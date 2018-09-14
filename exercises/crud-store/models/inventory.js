const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    style: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("inventory", inventorySchema)