const express=require('express');
const authRoutes=require('./routes/auth.routes');
const cookieParser=require('cookie-parser');
const app=express();//create server instance
app.use(express.json());//middleware to parse json data from request body
app.use(cookieParser());
app.use('/api/auth',authRoutes);
module.exports=app;