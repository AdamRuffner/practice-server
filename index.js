require('dotenv').config();
const express = require('express');
const port = process.env.PORT

const usersRoutes = require('./users/usersRoutes');

const server = express();

server.use('/users', (usersRoutes));

server.use('/', (req,res) => {
    res.status(200).send('Server is running')
});

server.listen(port, () => {
    console.log(`server is up on port ${port}`)
});