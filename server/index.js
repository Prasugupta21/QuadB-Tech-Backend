require('dotenv').config();
const  express=require('express');

const app=express();

const connectDB=require('./config/db');


connectDB();



app.listen(3000,(req,res)=>{
    console.log('Server Started on Port 3000')
})