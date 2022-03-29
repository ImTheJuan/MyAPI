/* eslint-disable no-console */
// Import express, mongoose and routes
const express = require('express');
const apiRoutes = require('./routes/api-routes');

// Initialize the app
const app = express();

// Read API petitions
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use Api routes in the App
app.use('/routes', apiRoutes);

module.exports = app;
