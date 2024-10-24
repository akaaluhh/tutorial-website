import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { user_middleware } from '../middlewares/user.js';
import { userModel } from '../models/usermodel.js';
import { JWT_USER_SECRET } from '../config.js';

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post('/signin', async (req, res) =>
{
    const email = req.body.email;
    const password = req.body.password;

    const response = await userModel.findOne({ email: email }).select('+password');

    if (!response)
    {
        res.status(403).json({ message: "Incorrect credentials !" });
    }
    else
    {
        const pwvalid = await bcrypt.compare(`${req.body.password}`, response.password, (err, same) =>
        {
            if (err)
            {
                return res.status(401).send(err);
            }
            if (same)
            {
                const token = jwt.sign({ id: response._id.toString() }, JWT_USER_SECRET);
                return res.status(301).cookie('token', token, { httpOnly: true }).json({ message: "signed in" });
            }
            else
            {
                return res.json({ message: "Incorrect credentials !" });
            }
        });
    }
});

userRouter.post('/signup', async (req, res) =>
{
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    const response = await userModel.findOne({ email: email });
    if (response)
    {
        return res.json({ message: "Email is in use !" });
    }

    try
    {
        await userModel.create({ email: email, password: password, username: username });
        res.status(200).json({ message: "User Created!" });
    } catch (err)
    {
        return res.status(501).json(err);
    }
});

userRouter.post('/signout', async (req, res) =>
{
    try
    {
        res.status(200).clearCookie("token");
        res.redirect("/");
    } catch (err)
    {
        return res.status(501).send(err);
    }
});

export { userRouter as user };