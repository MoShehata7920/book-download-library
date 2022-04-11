const express = require('express');

const dotenv = require('dotenv');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')

// Start up an instance of app
const app = express();
app.use(express.json())


const port = process.env.PORT || 5050;
dotenv.config();
connectDB()


app.get('/', (req, res) => {
    res.send("API is working now");

});
app.use('/api/users', userRoutes)


app.listen(port, () => {
    console.log(`server is working on port: ${port}`)
});