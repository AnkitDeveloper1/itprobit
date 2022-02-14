const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next) {
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send("Access denied");

    try {
        const decoded = jwt.verify(token, config.get('jwtprivateket'));
        req.user = decoded;
        next();
    }
    catch(ex) {
        return res.redirect('/');
    }
}

module.exports = auth;
