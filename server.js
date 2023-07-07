const express = require('express')
require('dotenv').config()
const {authRout} = require('./routes/authRoutes.js');
const { dbConnect } = require('./config/dbConnect.js');

const app = express();
dbConnect()

app.use(express.json())
app.use('/', authRout)

const port = 3000;

app.listen(port, ()=>{
  console.log(`App is listining in port ${port}`);
})