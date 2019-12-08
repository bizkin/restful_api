const express = require("express"),
  app = express(),
  path = require("path"),
  logger = require("morgan"),
  url = process.env.MONGO_URI || "mongodb://localhost:27017/countme",
  mongoose = require("mongoose"),
  db = mongoose.connection,
  PORT = process.env.PORT || 5000;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("CONNECTED!"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// express.static(path.join(__dirname, "/public"));

const weddingSchema = new mongoose.Schema({
  name: String
});

const Wedding = mongoose.model("Wedding", weddingSchema);

Wedding.find((err, wed) => {
  if (err) return console.error(err);
  // console.log(wed);
});

app.use(logger("dev"));

app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.render("index", {
    title: "REST API",
    desc: "showing some restful api sugaaa"
  })
);
app.use(express.json());

app.listen(PORT, () => console.log(`server is on port ${PORT} `));
