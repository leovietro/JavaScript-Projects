const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://leo:leo123@educode.utevs.mongodb.net/educode?retryWrites=true&w=majority")

const cardSchema = new mongoose.Schema(
    {
        "name": {
            type: String,
            required: true
        },
        "username": {
            type: String,
            required: true,
            unique: true
        },
        "code": {
            type: String,
            required: true
        },
        "codeLang": {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Card', cardSchema);