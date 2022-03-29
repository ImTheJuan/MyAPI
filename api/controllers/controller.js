// Import model
const User = require('../models/model');

// Handle get user
function getUser(req, res) {
  User.find({}, (err, user) => {
    if (err) return res.status(400).send(err.message);
    return res.status(200).send(user);
  });
}

// Handle create user
function createUser(req, res) {
  const newUser = new User(req.body);
  newUser.save((err, nUser) => {
    if (err) return res.status(400).send(err.message);
    return res.status(200).send(nUser);
  });
}

// Handle delete user
function deleteUser(req, res) {
  User.remove((err, user) => {
    if (err) return res.status(400).send(err.message);
    return res.status(200).send(user);
  });
}

// Handle view user info
function viewUser(req, res) {
  User.findById((err, user) => {
    if (err) return res.status(400).send(err.message);
    return res.status(200).send(user);
  });
}

module.exports = {
  getUser,
  viewUser,
  createUser,
  deleteUser,
};
