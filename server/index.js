import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()


const app = express();

app.use(express.json());


const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.du2zr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;



mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`))
    )
    .catch(error => {
        console.log(error)
    })

