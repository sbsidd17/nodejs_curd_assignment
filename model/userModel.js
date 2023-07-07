const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name Required"],
        trim : true
    },
    email : {
        type : String,
        required : [true, "Email Required"],
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : [true, "Password Required"]
    },
})

const userModel = mongoose.model("user", userSchema)

module.exports = {userModel}