const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`Mongo Connected: ${connection.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit();
    }


}
module.exports = connectDB