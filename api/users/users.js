const express = require('express');
const router = express.Router();
const users = require('../db/users');

router.get('/', (req, res) => {
    users.getCurrentUser(req, res);
});

router.post('/', (req, res) => {
    users.createUser(req, res);
});

module.exports = router;