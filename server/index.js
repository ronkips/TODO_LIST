const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port 
const PORT = process.env.PORT || 5500;
// const DBConnect = process.env.DB_CONNECT
const uri =
  "mongodb+srv://To-Do:kipruto1234@hillary.jsjso.mongodb.net/?retryWrites=true&w=majority";

//use cors
app.use(cors());

//import routes
const TodoItemRoute = require('./routes/todoItems');


//connect to mongodb ..
mongoose.connect(uri)
.then(()=> console.log("Database connected successfully"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);



//connect to server
app.listen(PORT, ()=> console.log("Server connected on port " +PORT) );