const express = require('express');
const router = express.Router();
const user = require("../controller/user.controller");
const { adminAuth } = require('../middleware/Auth');

router.post('/createUser', user.Create);
router.get('/users', adminAuth, user.getUser);
router.post('/login', user.login);

module.exports = router;