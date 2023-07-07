const express = require('express');
const {signup, login} = require('../controller/authController.js')

const authRout = express.Router()

authRout.get('/', (req, res)=>{
    res.send("User Management Backend with Express and MongoDB")
})

authRout.post('/signup', signup)
authRout.post('/login', login)

module.exports = {
    authRout
}