const mongoose = require("mongoose")

const imageSchema = mongoose.Schema({
    imageUrl:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Image', imageSchema)