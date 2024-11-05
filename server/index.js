require('dotenv').config();
const  express=require('express');


const connectDB=require('./config/db');
const fetchData=require('./routes/fetchData');

connectDB();
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',fetchData);



app.listen(3000,(req,res)=>{
    console.log('Server Started on Port 3000')
})