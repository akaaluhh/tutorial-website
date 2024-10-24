const jwt = require('jsonwebtoken');
const { JWT_USER_SECRET } = require('../config');

function user_middleware(req, res, next)
{
    const token = req.cookies.token;
    const response = jwt.verify(token, JWT_USER_SECRET);

    if (response)
    {
        req.userId = response.id;
        next();
    }
    else
    {
        res.status(403).json({ message: "Please sign in again !" });
    }
}

module.exports = { user_middleware };