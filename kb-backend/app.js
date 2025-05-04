const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Load environment variables
const PORT = process.env.PORT || 2001;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('❌ MONGO_URI is missing in .env file');
    process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use('/', routes);

// MongoDB connection and server start
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error('❌ MongoDB connection error:', err);
});
