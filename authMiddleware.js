const jwt = require('jsonwebtoken');
const users = require ('./users.js');
const httpStatusCode = require('http-status-codes');
const { UNAUTHORIZED, NOT_FOUND } = require('http-status-codes');
const jwtSecretKey = require ('./jwtSecretKey.js');

const authMiddleware = (req, res, next) => {
    const authorization = req.headers;
    if (!authorization) {
        res.status(httpStatusCode.UNAUTHORIZED).send("UNAUTHORIZED")
    };
    const result = jwt.verify(authorization, jwtSecretKey);
    const {username} = result;
    const user = users.find(user => user.username === username);
    // if (!user) {
    //     res.status(httpStatusCode.NOT_FOUND).send(NOT_FOUND)
    // };
    req.user = user;
    next();
}

module.exports = authMiddleware;