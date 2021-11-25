import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

import usersRoutes from './routes/users-routes.js'
import eventsRoutes from './routes/events-routes.js'
import HttpError from "./models/http-error.js";


const app = express();

app.use(express.json());

app.use("/api/users", usersRoutes)
app.use("/api/events", eventsRoutes)

//error handling for unsupported routes
app.use((req, res, next) => {
    throw new HttpError('Could not find this route.', 404);
});

//error handling middleware function
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'});
})


const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.du2zr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;



mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`))
    )
    .catch(error => {
        console.log(error)
    })



