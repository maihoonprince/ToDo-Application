const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/TodoRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(routes);

mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Mongodb Connected..."))
.catch((err) => console.error(err));

// 3rd step heroku deployment:
if(process.env.NODE_ENV = "production")[
    app.use(express.static("client/build"))
]

app.listen(PORT, () => console.log("Server Running on port" + PORT));