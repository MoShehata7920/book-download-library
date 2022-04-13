const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')
var fileupload = require("express-fileupload");

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}


// Start up an instance of app
const app = express();
app.use(express.json())
app.use(express.static("./public/"))



app.use(cors(corsOptions)) // Use this after the variable declaration

const port = process.env.PORT || 5050;
dotenv.config();
connectDB()

app.get('/', (req, res) => {
    res.send("API is working now");

});
app.use('/api/users', userRoutes)
app.use('/api/books', bookRoutes)


app.listen(port, () => {
    console.log(`server is working on port: ${port}`)
});