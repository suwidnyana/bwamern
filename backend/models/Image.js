const mongoose = require("mongoose")

const imageSchema = mongoose.Schema({
    imageUrl:{
        type: String
    }
})

module.exports = mongoose.model('Image', imageSchema)