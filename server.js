// import dotenv from 'dotenv';
// import express from 'express';
// import bodyParser from 'body-parser';
import bodyParser from 'body-parser';
import contactsRouter from './api/contacts';

require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/api', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/contacts', contactsRouter);