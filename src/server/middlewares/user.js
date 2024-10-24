import jwt from 'jsonwebtoken';
import { JWT_USER_SECRET } from '../config.js';

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

export { user_middleware };