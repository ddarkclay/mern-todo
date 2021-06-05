// Node version 14+ supports this
// "type": "module" insert in package.json

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Node version 12+ support this
// const express = require('express')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// const cors = require('cors')

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('Hello Todo')
})

// const CONNECTION_URL = "mongodb+srv://sanmartin:sanmartin@admin@graphql-cluster.jd5mz.mongodb.net/todo-app?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on PORT : ${PORT}`)
        )
    ).catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
