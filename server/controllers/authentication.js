const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {

}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  /* See if the user with given name exists */
  User.findOne({ email }, function(err, existingUser) {
    if (err) { return next(err); }
  /* If the user EXISTS return an error */
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }
  /* If the user does NOT exist create new user */
    const user = new User({
      email,
      password
    });
    user.save(function(err) {
      if (err) { return next(err); }
  /* Respond to request that user was created */
      res.json({ token: tokenForUser(user) });
    });
  });
}
