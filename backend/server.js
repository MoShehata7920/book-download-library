// Require Express to run server and routes
const express = require('express');

const dotenv = require('dotenv');
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')

// Start up an instance of app
const app = express();



const port = process.env.PORT || 5000;
dotenv.config();
connectDB()


app.get('/', (req, res) => {
    res.send("API is working now");

});
app.use('/api/users', userRoutes)
app.get('/api/notes', (req, res) => {
    res.json({});

});
// app.get('/api/notes/:id', (req, res) => {
//     const note = notes.find((n) => n._id === req.params.id);
//     res.send(note)

// });
app.listen(port, () => {
    console.log(`server is working on port: ${port}`)
});