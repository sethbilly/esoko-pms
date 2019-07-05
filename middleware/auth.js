const jwt = require('jsonwebtoken');
const config = require('../config/keys');

exports.checkToken = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }
    if (token) {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};

exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // For the given username fetch user from DB
    if (username && password) {
        if (username === config.demoUser && password === config.demoPassword) {
            const token = jwt.sign({
                    username: username
                },
                config.jwtSecret, {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            // return the JWT token for the future API calls
            res.json({
                success: true,
                message: 'Authentication successful!',
                token: token
            });
        } else {
            res.send(403).json({
                success: false,
                message: 'Incorrect username or password'
            });
        }
    } else {
        res.send(400).json({
            success: false,
            message: 'Authentication failed! Please check the request'
        });
    }
};