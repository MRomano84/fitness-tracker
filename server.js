const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config();
// {path: path.join(__dirname, "..", ".env")}

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const url = process.env.URI;

// console.log(process.env.URI);
mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connection estabislished with MongoDB');
})
.catch(error => console.error(error.message));

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/homeroutes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
