const express = require("express");
const app = express();

const MONGO = process.env.MONGO_URI || "mongodb://localhost:27017/restapi";
const mongoose = require("mongoose");
mongoose.connect(MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", () => console.log("error connection"));
db.once("open", () => console.log("CONNECTED!"));

app.get("/hello", (req, res) => res.send("Hello Bro!!!"));

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is on ${PORT} `));
