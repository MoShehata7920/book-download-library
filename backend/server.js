const express = require('express');

const notes = require("./data/notes");
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.get('/', (req, res) => {
    res.send("API is working now");

});

app.get('/api/notes', (req, res) => {
    res.json(notes);

});
app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note)

});
app.listen(port, () => {
    console.log(`server is working on port: ${port}`)
});