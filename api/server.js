/* eslint-disable no-console */

const mongoose = require('mongoose');
const app = require('./app');

// Setup server port
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/API', (err) => {
  if (err) console.log('Error connecting MongoDB');
  else {
    app.listen(port, () => {
      console.log(`Running RestHub on port ${port}`);
    });
  }
});