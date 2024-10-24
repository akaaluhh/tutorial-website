const express = require('express');
const jwt = require('jsonwebtoken');
const { user_middleware } = require('../middlewares/user');

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post('/signin', async (req, res) =>
{
    const email = req.body.userId;
    const password = req.body.password;
});

userRouter.post('/signup', async (req, res) =>
{

});

module.exports = { user: userRouter };