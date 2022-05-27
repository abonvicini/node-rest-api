const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
// app.use('/users', usersRoute);

// Middlewares

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});


//Connect with the database
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
    },
    () => {
        console.log('Connected to the database');
    },
);

// Como escuchamos el puerto 3000
app.listen(3001);
