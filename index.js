const express = require("express"),
  app = express(),
  url = process.env.MONGO_URI || "mongodb://localhost:27017/countme",
  mongoose = require("mongoose"),
  db = mongoose.connection,
  Schema = mongoose.Schema,
  PORT = process.env.PORT || 5000;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("CONNECTED!"));

const weddingSchema = new mongoose.Schema({
  name: String
});

const Wedding = mongoose.model("Wedding", weddingSchema);

const ganHapekan = new Wedding({ name: "ganHapekan" });

ganHapekan.save(function(err, wedding) {
  if (err) return console.error(err);
  console.log(`SAVED: ${wedding.name}`);
});

Wedding.find((err, wed) => {
  if (err) return console.error(err);
  console.log(wed);
});

app.get("/", (req, res) => res.send("Home page"));
app.get("/hello", (req, res) => res.send("Hello Bro!!!"));
app.use(express.json());

app.listen(PORT, () => console.log(`server is on port ${PORT} `));
