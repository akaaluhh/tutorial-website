import dotenv from 'dotenv';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import { user } from './routes/user.js'

dotenv.config();
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
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected !");
    } catch (err)
    {
        console.error("Database connection error", err);
    }
    app.listen(3000);
}

main();