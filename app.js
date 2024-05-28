const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/routes');

const app = express();

app.use(express.json());
app.use('/api',router);

mongoose.connect('mongodb+srv://shriyasorte2000:Shriya%4002@cluster0.bk2ju2n.mongodb.net/UserManagement');

const database = mongoose.connection;

database.on('error',(error)=>{
    console.log(error)
})

database.once('connected',()=>{
    console.log('Database connected');
})

app.listen(5002,()=>{
    console.log('server started on port 5002');
})

// http://localhost:5002/api/