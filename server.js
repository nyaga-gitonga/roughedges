import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';


const app= express();

//Middleware
app.use(bodyparser.json({limit: '30mb', extended: true}));
app.use(bodyparser.urlencoded({limit: '30mb', extended: true}));

dotenv.config();

mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true}).
then(()=>app.listen(process.env.PORT,()=>console.log("Listening")))
.catch((error)=>console.log(error))


//Routes 

app.use('/auth', AuthRoute)
app.use('/user',UserRoute)
app.use('/post',PostRoute)

