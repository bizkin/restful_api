const express = require("express");
const app = express();

const PORT = 5000;

app.get("/hello", (req, res) => res.send("Hello Bro!"));

app.listen(PORT, () => console.log(`server is on ${PORT} `));
