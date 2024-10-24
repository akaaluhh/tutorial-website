require('dotenv').config()

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const { user } = require('./routes/user');

const app = express();
app.use(cors({
    origin: 'https://localhost:3000/',
    credentials: true
}));

app.use(cookieParser());
app.use('/user', user);

async function main()
{
    try
    {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected !");
    } catch (err)
    {
        console.error("Database connection error", err);
    }
    app.listen(3000);
}

main();