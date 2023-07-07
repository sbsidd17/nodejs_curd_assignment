const mongoose = require('mongoose')

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully");

    } catch (error) {
        throw error.message
    }
}

module.exports = {dbConnect}