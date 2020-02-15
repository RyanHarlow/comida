const express = require('express');
const router = express.Router();
const users = require('../db/users');

router.get('/', (req, res) => {
    users.getCurrentUser(req, res);
});

router.post('/', (req, res) => {
    users.createUser(req, res);
});

router.post('/login', (req, res) => {
    users.loginUser(req, res);
})

module.exports = router;