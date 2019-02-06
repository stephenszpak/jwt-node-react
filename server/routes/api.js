const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');

const passport = require('passport');
const path = require('path');

require('../middlewares/passport')(passport);

router.get('/', function (req, res, next) {
  res.json({ status: "success", message: "Project Tracker API", data: { "version_number": "v0.0.2" } })
});

// auth
router.post('/users/register', UserController.create);
router.post('/users/login', UserController.login);
router.get('/users', passport.authenticate('jwt', { session: false }), UserController.getAll);
router.get('/user/:userId', passport.authenticate('jwt', { session: false }), UserController.getById, UserController.get);

module.exports = router;
