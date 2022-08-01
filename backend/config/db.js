//connect to db using mongoose
const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING)
        console.log('mongoDB connected');
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB