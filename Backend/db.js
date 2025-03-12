const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/msv";

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => console.log("Connected to MongoDB"))
        .catch((e) => console.log("MongoDB connection error:", e.message));
}

const express = require('express')
const app = express()
const port = 3000

module.exports = connectToMongo;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
