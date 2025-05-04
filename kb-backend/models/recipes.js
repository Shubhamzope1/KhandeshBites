const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const recipesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    short_description: {
        type: String,
        required: true
    },
    cooking_process: {
        type: Array,
        required: true
    },
    tips: {
        type: Array,
        required: true
    },
    funfact: {
        type: Array,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('recipes', recipesSchema, 'recipes'); // exporting the model