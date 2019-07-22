const mongoose = require('mongoose')

const strengthSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    weight:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
})

const Strength = mongoose.model('Strength', strengthSchema)

module.exports = Strength