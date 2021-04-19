const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config({path: path.join(__dirname, "..", ".env")});

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

console.log(process.env.URI);
mongoose.connect(process.env.URI || "mongodb://localhost/workoutDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connection estabislished with MongoDB');
})
.catch(error => console.error(error.message));

// routes
app.use(require("./routes/api.js"));
// will need html routes

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://myMongo:myMongoUNH@cluster0.0ylfj.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });