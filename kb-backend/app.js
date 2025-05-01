const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cors = require('cors');
const port = 2001;
const host = 'localhost';
const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use('/', routes);
mongoose.connect('mongodb+srv://Admin2001:ZmReLMQVxZXRSOba@cluster0.mm0me.mongodb.net/RecipeCollection?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, host, () => {
        console.log(`Server is running at http://${host}:${port}`);
    });
})
.catch(err => console.error('MongoDB connection error:', err));
