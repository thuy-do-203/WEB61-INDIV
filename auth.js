const users = require ('./users.js');
const httpStatusCode = require('http-status-codes');
const jwt = require('jsonwebtoken');
const express = require('express');
const authRouter = express.Router();
const jwtSecretKey = require ('./jwtSecretKey.js');

authRouter.post('/', (req, res) => {
    const {username, password} = req.body;
    const user = users.find(u => u.username === username);
    if (!user) {
        res.status(httpStatusCode.NOT_FOUND).send('user not found');
    }
    if (user.password !== password ) {
        res.status(httpStatusCode.UNAUTHORIZED).send('password incorrect');
    }

    const token = jwt.sign({username}, jwtSecretKey, {expiresIn: '30m'});
    res.json({token});
})

module.exports = authRouter