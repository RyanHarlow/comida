const express = require('express');
const router = express.Router();
const users = require('../db/users');

router.get('/', (req, res) => {
    users.getCurrentUser(req, res);
});

router.post('/', (req, res) => {
    users.createUser(req, res);
});

router.get('/:id', (req, res) => {
    users.getUserById(req, res);
})

router.post('/login', (req, res) => {
    users.loginUser(req, res);
})

router.post('/logout', (req, res) => {
    users.logoutUser(req, res);
})

module.exports = router;