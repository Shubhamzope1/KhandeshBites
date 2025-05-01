const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const categoriesSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('categories', categoriesSchema, 'categories'); // exporting the model