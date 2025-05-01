const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const adminSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('AdminUser', adminSchema, 'AdminUser'); // exporting the model