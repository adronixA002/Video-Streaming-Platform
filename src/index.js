import dotenv from "dotenv"
import connectDB from './db/index.js';

dotenv.config({
    path : './env'
})

connectDB()






























/*                    Approach 1
import express from 'express';
const app = express();

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log('Error in app:', error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error
    }
})()    */